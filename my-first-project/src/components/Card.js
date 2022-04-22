import "./Card.css";
import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

function Card(props) {
  const { cardInfo, viewOnly, cardUpdateHandler } = props;

  const cardCheckboxHandler = () => {
    cardUpdateHandler({ ...cardInfo, checked: !cardInfo.checked });
  };

  const [unsavedTitle, setUnsavedTitle] = useState();
  const [unsavedText, setUnsavedText] = useState();

  const clickPencil = () => {
    cardUpdateHandler({ ...cardInfo, isEdeting: true, checked: false });
  };

  const userInputTitle = (event) => {
    setUnsavedTitle(event.target.value);
  };

  const userInputText = (event) => {
    setUnsavedText(event.target.value);
  };

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

  const clickCancel = () => {
    cardUpdateHandler({ ...cardInfo, isEdeting: false });
  };

  return (
    <div className={cardInfo.checked ? "checked-card" : "card"}>
      {cardInfo.isEdeting ? (
        <div>
          <input
            className="title-form"
            type="text"
            defaultValue={cardInfo.title}
            onChange={userInputTitle}
          />
          <button className="cancel-button-edit" onClick={clickCancel}>
            <FcCancel size={22} />
          </button>
          <button className="save-button-edit" onClick={clickSave}>
            <BsCheckLg size={20} />
          </button>
          <textarea
            className="text-form "
            type="text"
            defaultValue={cardInfo.text}
            onChange={userInputText}
          />
        </div>
      ) : (
        <div>
          <div className="card-header">
            <input
              className="card-checkbox"
              type="checkbox"
              onChange={cardCheckboxHandler}
            />
            {cardInfo.title}
            {!viewOnly ? (
              <div>
                <button className="pencil-button" onClick={clickPencil}>
                  <BsPencilSquare size={20} />
                </button>
                <button className="cancel-button" onClick={clickCancel}>
                  <FcCancel size={22} />
                </button>
                <button className="save-button" onClick={clickSave}>
                  <BsCheckLg size={20} />
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <h1>{cardInfo.text}</h1>
        </div>
      )}
    </div>
  );
}

export default Card;
