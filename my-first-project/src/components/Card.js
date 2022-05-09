import "./Card.css";
import React, { useState } from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";

function Card(props) {
  const { cardInfo, viewOnly, cardUpdateHandler } = props;

  const [unsavedTitle, setUnsavedTitle] = useState();
  const [unsavedText, setUnsavedText] = useState();

  const clickSave = () => {
    if (unsavedTitle) {
      cardUpdateHandler({
        ...cardInfo,
        isEdeting: false,
        title: unsavedTitle,
      });
    }
    if (unsavedText) {
      cardUpdateHandler({
        ...cardInfo,
        isEdeting: false,
        text: unsavedText,
      });
    }
    if (unsavedTitle && unsavedText) {
      cardUpdateHandler({
        ...cardInfo,
        isEdeting: false,
        title: unsavedTitle,
        text: unsavedText,
      });
    }
  };

  return (
    <div className={`card ${cardInfo.checked ? "checked" : ""}`}>
      <CardHeader
        cardInfo={cardInfo}
        viewOnly={viewOnly}
        cardUpdateHandler={cardUpdateHandler}
        clickSave={clickSave}
        setUnsavedTitle={setUnsavedTitle}
      />
      <CardBody cardInfo={cardInfo} setUnsavedText={setUnsavedText} />
    </div>
  );
}

export default Card;
