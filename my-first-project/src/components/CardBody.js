import "./Card.css";
import { Link } from "react-router-dom";
import { cardsActions } from "../store/cardsSlice";
import { useDispatch } from "react-redux";

const CardBody = (props) => {
  const { cardInfo } = props;
  const dispatch = useDispatch();

  const userInputText = (event) => {
    dispatch(cardsActions.setUnsavedText(event.target.value));
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
          data-testid="input-text-field"
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
