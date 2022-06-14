import Card from "./Card";
import { useSelector } from "react-redux/es/hooks/useSelector";

const CardList = () => {
  const cards = useSelector((state) => state.cards.cards);

  return (
    <div className="position">
      {cards.map((card) => (
        <div key={card.id}>
          <Card cardInfo={card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
