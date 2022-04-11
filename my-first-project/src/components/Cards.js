import Card from "./Card";
import React, { useState } from "react";
import "./Card.css";
const Cards = (props) => {
  const [viewOnly, setViewOnly] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const viewOnlyHandler = () => {
    setViewOnly(!viewOnly);
    setEditMode(false);
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
        {props.items.map((card) => (
          <div>
            <Card
              title={card.title}
              text={card.text}
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
