import React, { useState, useEffect } from "react";
import cards from "../Constants";

const CardContext = React.createContext({
  cardState: cards,
  viewOnly: false,
  deletedHandler: () => {},
  addCardHandler: () => {},
  cardUpdateHandler: () => {},
  viewOnlyHandler: () => {},
});

export const CardContextProvider = (props) => {
  const [cardState, setCardState] = useState(cards);
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
