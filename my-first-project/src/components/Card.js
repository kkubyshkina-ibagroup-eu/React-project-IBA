import "./Card.css";
import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import withLoadingDelay from "./withLoadingDelay";
import CardContext from "../contex/contex";

function Card(props) {
  const { cardInfo } = props;
  const [unsavedTitle, setUnsavedTitle] = useState();
  const [unsavedText, setUnsavedText] = useState();
  const ctx = useContext(CardContext);

  const clickSave = () => {
    if (unsavedTitle) {
      ctx.cardUpdateHandler({
        ...cardInfo,
        isEdeting: false,
        title: unsavedTitle,
      });
    }
    if (unsavedText) {
      ctx.cardUpdateHandler({
        ...cardInfo,
        isEdeting: false,
        text: unsavedText,
      });
    }
    if (unsavedTitle && unsavedText) {
      ctx.cardUpdateHandler({
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
        clickSave={clickSave}
        setUnsavedTitle={setUnsavedTitle}
      />
      <CardBody cardInfo={cardInfo} setUnsavedText={setUnsavedText} />
    </div>
  );
}

Card.propTypes = {
  cardInfo: PropTypes.object,
};

export default withLoadingDelay(Card);
