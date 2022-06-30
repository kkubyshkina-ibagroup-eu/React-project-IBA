import "./Card.css";
import { Link } from "react-router-dom";

const CardBody = (props) => {
  const { cardInfo, setUnsavedText } = props;
  const userInputText = (event) => {
    setUnsavedText(event.target.value);
  };

  const clickLinkHandler = (event) => {
    switch (event.detail) {
      case 1:
        event.preventDefault();
        break;
      case 2:
        break;
    }
  };

  return (
    <div>
      {cardInfo.isEdeting ? (
        <textarea
          data-testid="input-field"
          className="text-form "
          type="text"
          defaultValue={cardInfo.text}
          onChange={userInputText}
        />
      ) : (
        <Link
          data-testid="link to CardById"
          to={`/card/${cardInfo.id}`}
          className={`card-text ${cardInfo.checked ? "checked" : ""}`}
          onClick={clickLinkHandler}
        >
          {cardInfo.text}
        </Link>
      )}
    </div>
  );
};

export default CardBody;
