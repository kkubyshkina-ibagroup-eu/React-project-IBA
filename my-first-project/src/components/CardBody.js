import "./Card.css";

const CardBody = (props) => {
  const { cardInfo, setUnsavedText } = props;
  const userInputText = (event) => {
    setUnsavedText(event.target.value);
  };

  return (
    <div className={`card-text ${props.cardInfo.checked ? "checked" : ""}`}>
      {cardInfo.isEdeting ? (
        <textarea
          className="text-form "
          type="text"
          defaultValue={cardInfo.text}
          onChange={userInputText}
        />
      ) : (
        <div>{cardInfo.text}</div>
      )}
    </div>
  );
};

export default CardBody;
