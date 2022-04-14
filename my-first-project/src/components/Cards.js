import Card from "./Card";
import React, { useState } from "react";
import "./Card.css";
const Cards = (props) => {
  const [viewOnly, setViewOnly] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const cardInfo = props.cardInfo;

  const viewOnlyHandler = () => {
    setViewOnly(!viewOnly);
    setEditMode(false);
    cardInfo.isEdeting = false;
  };

  return (
    <div>
      <div className="view-only-header">View only</div>
      <input
        className="app-checkbox"
        type="checkbox"
        onChange={viewOnlyHandler}
      />
      <div className="position">
        {cardInfo.map((card) => (
          <div key={card.id}>
            <Card
              cardInfo={card}
              viewOnly={viewOnly}
              setEditMode={setEditMode}
              editMode={editMode}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Cards;
