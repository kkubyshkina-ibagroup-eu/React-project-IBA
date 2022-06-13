import { NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux/es/hooks/useSelector";

function Header() {
  const cards = useSelector((state) => state.cards.cards);
  return (
    <div className="header">
      <h1> My first application! </h1>
      <nav className="nav">
        <NavLink to="/home"> Home</NavLink>
        <NavLink to="/sign-in"> Sign in</NavLink>
      </nav>
      <button className="counter">
        Cards
        <span className="counter-number">{cards.length}</span>
      </button>
    </div>
  );
}

export default Header;
