import "./Card.css";
import React, { useState } from "react";

function Card() {
  const [checked, setChecked] = useState();
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className={checked ? "checked-card" : "card"}>
      <div className="card-header">
        <h1>Info </h1>
        <input
          className="card-checkbox"
          type="checkbox"
          onChange={handleChange}
        />
      </div>
      <h1>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </h1>
    </div>
  );
}

export default Card;
