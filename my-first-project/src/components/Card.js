import "./Card.css";
import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { BsCheckLg } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";

function Card() {
  const [checked, setChecked] = useState();
  const checkboxHandler = () => {
    setChecked(!checked);
  };
  const defaultTitle = "Info";
  const defaultText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
  sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.";

  const [showButton, setShowButton] = useState(true);
  const [title, setTitle] = useState(defaultTitle);
  const [text, setText] = useState(defaultText);

  const clickPencil = () => {
    setChecked(false);
    setShowButton(false);
  };

  const userInputTitle = (event) => {
    setTitle(event.target.value);
  };

  const userInputText = (event) => {
    setText(event.target.value);
  };

  const clickSave = () => {
    setShowButton(true);
  };

  const clickCancel = () => {
    setTitle(defaultTitle);
    setText(defaultText);
    setShowButton(true);
  };

  return (
    <div className={checked ? "checked-card" : "card"}>
      <div className="card-header">
        {showButton ? (
          <div>
            <input
              className="card-checkbox"
              type="checkbox"
              onChange={checkboxHandler}
            />
            <button className="pencil-button" onClick={clickPencil}>
              <BsPencilSquare size={20} />
            </button>
            {title}
          </div>
        ) : (
          <div>
            <input
              className="title-form"
              type="text"
              defaultValue={title}
              onChange={userInputTitle}
            />
            <textarea
              className="text-form "
              type="text"
              defaultValue={text}
              onChange={userInputText}
            />
            <button className="cancel-button" onClick={clickCancel}>
              <FcCancel size={22} />
            </button>
            <button className="pencil-button" onClick={clickSave}>
              <BsCheckLg size={20} />
            </button>
          </div>
        )}
      </div>
      {showButton && <h1>{text}</h1>}
    </div>
  );
}

export default Card;
