import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "./Card";

const CardById = () => {
  const params = useParams();
  const cards = useSelector((state) => state.cards.cards);
  const card = cards.find((card) => card.id === params.id);
  return <Card cardInfo={card} />;
};

export default CardById;
