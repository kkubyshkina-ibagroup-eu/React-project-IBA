import Header from "./components/Header";
import cards from "./Constants";
import Card from "./components/Card";
import "./components/Header.css";
import { useState } from "react";

function App() {
  const [cardState, setCardState] = useState(cards);
  const [viewOnly, setViewOnly] = useState(false);

  const cardUpdateHandler = (newCard) => {
    const card = cardState.map((oldCard) => {
      if (oldCard.id === newCard.id) {
        const updatedCard = {
          ...oldCard,
          checked: newCard.checked,
          isEdeting: newCard.isEdeting,
        };
        return updatedCard;
      }
      return oldCard;
    });
    setCardState(card);
  };

  const viewOnlyHandler = () => {
    setViewOnly(!viewOnly);
    cardState.map((card) => {
      card.isEdeting = false;
      cardUpdateHandler(card);
    });
  };

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
