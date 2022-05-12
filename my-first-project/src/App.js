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

const AddCard = styled.button`
  position: absolute;
  left: 330px;
  top: 160px;
  width: 120px;
  height: 60px;
  background-color: #651679;
  border: none;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 12px;
`;

function App() {
  const [cardState, setCardState] = useState(cards);
  const [viewOnly, setViewOnly] = useState();

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

  const deletedHandler = () => {
    setCardState([...cardState.filter((card) => !card.checked)]);
  };

  const addCardHandler = () => {
    setCardState(() => {
      const newCardState = [...cardState];
      newCardState.push({
        title: "New Card",
        text: "New Card",
        id: Math.random().toString(),
      });
      return newCardState;
    });
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
    <div>
      <Header />
      <div className="view-only-header">View only</div>
      <ViewOnlyCheckbox type="checkbox" onChange={viewOnlyHandler} />
      <DeleteButton onClick={() => deletedHandler()}>
        Delete selected cards
      </DeleteButton>
      <AddCard onClick={addCardHandler}> Add card</AddCard>
      <CardList
        viewOnly={viewOnly}
        cardState={cardState}
        cardUpdateHandler={cardUpdateHandler}
      />
    </div>
  );
}

export default App;
