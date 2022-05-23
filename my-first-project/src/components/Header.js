import React, { useContext } from "react";
import CardContext from "../contex/contex";
import "./Header.css";

function Header() {
  const ctx = useContext(CardContext);

  return (
    <div className="header">
      <h1> My first application! </h1>
      {
        <button className="counter">
          Cards
          <span className="counter-number">{ctx.cardState.length}</span>
        </button>
      }
    </div>
  );
}

export default Header;
