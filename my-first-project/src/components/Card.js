import "./Card.css";
import PropTypes from "prop-types";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import withLoadingDelay from "./withLoadingDelay";

function Card(props) {
  const { cardInfo } = props;

  return (
    <div
      data-testid="card-component"
      className={`card ${cardInfo.checked ? "checked" : ""}`}
    >
      <CardHeader cardInfo={cardInfo} />
      <CardBody cardInfo={cardInfo} />
    </div>
  );
}

Card.propTypes = {
  cardInfo: PropTypes.object,
};

export default withLoadingDelay(Card);
