import Card from "./Card";
import React, { useContext } from "react";
import CardContext from "../contex/contex";

const CardList = () => {
  const ctx = useContext(CardContext);

  return (
    <div className="position">
      {ctx.cardState.map((card) => (
        <div key={card.id}>
          <Card cardInfo={card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
