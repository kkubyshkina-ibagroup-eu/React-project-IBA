import { NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { userActions } from "../store/userSlice";

function Header() {
  const cards = useSelector((state) => state.cards.cards);
  const isLogin = useSelector((state) => state.user.isLogin);
  const adminMode = useSelector((state) => state.user.adminMode);
  const dispatch = useDispatch();
  return (
    <div className="header">
      {!isLogin ? (
        <h1> My first application! </h1>
      ) : (
        <h1> Welcome {localStorage.getItem("login")}</h1>
      )}
      <nav className="nav">
        <NavLink to="/home"> Home &emsp;</NavLink>
        {!isLogin ? (
          <NavLink to="/sign-in"> Sign in </NavLink>
        ) : (
          <button
            className="sign-out"
            onClick={() => {
              dispatch(userActions.logoutUser());
            }}
          >
            Sign out
          </button>
        )}
        {adminMode && <NavLink to="/settings">&emsp; Settings</NavLink>}
      </nav>
      <button className="counter">
        Cards
        <span className="counter-number">{cards.length}</span>
      </button>
    </div>
  );
}

export default Header;
