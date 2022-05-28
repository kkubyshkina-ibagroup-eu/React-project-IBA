import React, { useState, useEffect } from "react";
import axios from "axios";

const CardContext = React.createContext({
  cardState: [],
  viewOnly: false,
  deletedHandler: () => {},
  addCardHandler: () => {},
  cardUpdateHandler: () => {},
  viewOnlyHandler: () => {},
});

export const CardContextProvider = (props) => {
  const [cardState, setCardState] = useState([]);
  const [viewOnly, setViewOnly] = useState();

  const cardUpdateHandler = (newCard) => {
    setCardState(
      cardState.map((oldCard) => {
        if (oldCard.id === newCard.id) {
          return newCard;
        }
        return oldCard;
      })
    );
  };

  const deletedHandler = () => {
    setCardState([...cardState.filter((card) => !card.checked)]);
  };

  const addCardHandler = () => {
    setCardState([
      ...cardState,
      { text: "New Card", title: "New Card", id: Math.random().toString() },
    ]);
  };

  const viewOnlyHandler = () => {
    setViewOnly(!viewOnly);
  };

  useEffect(() => {
    setCardState(
      cardState.map((card) => {
        card = {
          ...card,
          isEdeting: false,
        };
        return card;
      })
    );
  }, [viewOnly]);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json";
    axios.get(url).then((resp) => {
      const cardsData = resp.data.slice(0, 15);
      const transformedCardsData = cardsData.map((data) => {
        return {
          id: data.Number,
          title: data.Name,
          text: data.About,
        };
      });
      setCardState(transformedCardsData);
    });
  }, []);

  return (
    <CardContext.Provider
      value={{
        cardState: cardState,
        viewOnly: viewOnly,
        deletedHandler: deletedHandler,
        addCardHandler: addCardHandler,
        cardUpdateHandler: cardUpdateHandler,
        viewOnlyHandler: viewOnlyHandler,
      }}
    >
      {props.children}
    </CardContext.Provider>
  );
};

export default CardContext;
