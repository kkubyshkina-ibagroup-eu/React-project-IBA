import "../App.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cardsActions } from "../store/cardsSlice";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const ViewOnlyCheckbox = styled.button`
  position: relative;
  left: 20px;
  top: 30px;
  width: 80px;
  height: 60px;
  background-color: #651679;
  border: none;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 12px;
`;

const Settings = () => {
  const viewOnlyMode = useSelector((state) => state.cards.viewOnly);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="view-only-header">
        Switch {viewOnlyMode ? "off" : "on"} View only mode
      </div>
      <ViewOnlyCheckbox
        data-testid="view-only-checkbox"
        onClick={() => {
          dispatch(cardsActions.setViewOnly());
        }}
      >
        Press
      </ViewOnlyCheckbox>
      <div className="comment">
        <h1>Settings</h1>
      </div>
    </Fragment>
  );
};

export default Settings;
