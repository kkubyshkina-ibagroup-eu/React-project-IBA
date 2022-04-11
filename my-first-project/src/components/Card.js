import "./Card.css";
import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

function Card(props) {
  const cardCheckboxHandler = () => {
    setCardChecked(!cardChecked);
  };
  const defaultTitle = props.title;
  const defaultText = props.text;
  const viewOnly = props.viewOnly;
  const setEditMode = props.setEditMode;
  const editMode = props.editMode;

  const [cardChecked, setCardChecked] = useState();
  const [title, setTitle] = useState(defaultTitle);
  const [text, setText] = useState(defaultText);
  const [unsavedText, setUnsavedText] = useState();
  const [unsavedTitle, setUnsavedTitle] = useState();

  const clickPencil = () => {
    setCardChecked(false);
    setEditMode(true);
  };

  const userInputTitle = (event) => {
    setUnsavedTitle(event.target.value);
  };

  const userInputText = (event) => {
    setUnsavedText(event.target.value);
  };

  const clickSave = () => {
    setEditMode(false);
    unsavedText ? setText(unsavedText) : setText(defaultText);
    unsavedTitle ? setTitle(unsavedTitle) : setTitle(defaultTitle);
  };

  const clickCancel = () => {
    setEditMode(false);
  };

  return (
    <div className={cardChecked ? "checked-card" : "card"}>
      {editMode ? (
        <div>
          <input
            className="title-form"
            type="text"
            defaultValue={title}
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
            defaultValue={text}
            onChange={userInputText}
          />
        </div>
      ) : (
        <div className="card-header">
          <input
            className="card-checkbox"
            type="checkbox"
            onChange={cardCheckboxHandler}
          />
          {title}
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
      )}
      {!editMode && <h1>{text}</h1>}
    </div>
  );
}

export default Card;
