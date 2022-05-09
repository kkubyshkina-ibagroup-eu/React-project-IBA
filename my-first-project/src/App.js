import Header from "./components/Header";
import cards from "./Constants";
import "./components/Header.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import CardList from "./components/CardList";

const ViewOnlyCheckbox = styled.input`
  accent-color: #651679;
  position: absolute;
  left: 150px;
  top: 160px;
  width: 30px;
  height: 30px;
`;

const DeleteButton = styled.button`
  position: absolute;
  left: 200px;
  top: 160px;
  width: 120px;
  height: 60px;
  background-color: #651679;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: left;
  font-size: 15px;
  border-radius: 12px;
  padding-top: 5px;
`;

function App() {
  const [cardState, setCardState] = useState(cards);
  const [viewOnly, setViewOnly] = useState();
  const [deleteCards, setDeleteCards] = useState([]);

  const viewOnlyHandler = () => {
    setViewOnly(!viewOnly);
  };

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
  const deletedHandler = (deleteCards) => {
    console.log(deleteCards);
    setCardState([...cardState.filter((card) => !deleteCards.includes(card))]);
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
    setDeleteCards(cardState.filter((card) => card.checked));
  }, [cardState]);

  return (
    <div>
      <Header />
      <div className="view-only-header">View only</div>
      <ViewOnlyCheckbox type="checkbox" onChange={viewOnlyHandler} />
      <DeleteButton onClick={() => deletedHandler(deleteCards)}>
        Delete selected cards
      </DeleteButton>
      <CardList
        viewOnly={viewOnly}
        cardState={cardState}
        cardUpdateHandler={cardUpdateHandler}
      />
    </div>
  );
}

export default App;
