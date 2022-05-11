import Card from "./Card";

const CardList = (props) => {
  const { cardState, viewOnly, cardUpdateHandler } = props;

  return (
    <div className="position">
      {cardState.map((card) => (
        <div key={card.id}>
          <Card
            cardInfo={card}
            viewOnly={viewOnly}
            cardUpdateHandler={cardUpdateHandler}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
