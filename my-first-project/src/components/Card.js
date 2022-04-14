import "./Card.css";
import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

function Card(props) {
  const cardCheckboxHandler = () => {
    setCardChecked(!cardChecked);
    cardInfo.checked = !cardInfo.checked;
  };
  const editMode = props.editMode;
  const cardInfo = props.cardInfo;
  const viewOnly = props.viewOnly;
  const setEditMode = props.setEditMode;

  const [cardChecked, setCardChecked] = useState();
  const [unsavedTitle, setUnsavedTitle] = useState();
  const [unsavedText, setUnsavedText] = useState();

  const clickPencil = () => {
    cardInfo.checked = false;
    setEditMode(true);
    cardInfo.isEdeting = true;
  };

  const userInputTitle = (event) => {
    setUnsavedTitle(event.target.value);
  };

  const userInputText = (event) => {
    setUnsavedText(event.target.value);
  };

  const clickSave = () => {
    if (unsavedTitle) cardInfo.title = unsavedTitle;
    if (unsavedText) cardInfo.text = unsavedText;
    cardInfo.isEdeting = false;
    setEditMode(false);
  };

  const clickCancel = () => {
    setEditMode(false);
    cardInfo.isEdeting = false;
  };

  return (
    <div className={cardInfo.checked ? "checked-card" : "card"}>
      {cardInfo.isEdeting && editMode ? (
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
