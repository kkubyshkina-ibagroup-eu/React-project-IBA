import Header from "./components/Header";
import cards from "./Constants";
import Card from "./components/Card";
import "./components/Header.css";
import { useState, useEffect } from "react";

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
      <input
        className="app-checkbox"
        type="checkbox"
        onChange={viewOnlyHandler}
      />
      <div className="position">
        {cardState.map((card) => (
          <div key={card.id}>
            <Card
              cardInfo={card}
              viewOnly={viewOnly}
              cardUpdateHandler={cardUpdateHandler}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
