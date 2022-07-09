import "./NotFound.css";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { cardsActions } from "../store/cardsSlice";
import { Fragment } from "react";

const Settings = () => {
  const ViewOnlyCheckbox = styled.input`
    accent-color: #651679;
    position: relative;
    left: 150px;
    bottom: 10px;
    width: 30px;
    height: 30px;
  `;
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="view-only-header">View only</div>
      <ViewOnlyCheckbox
        data-testid="view-only-checkbox"
        type="checkbox"
        onChange={() => {
          dispatch(cardsActions.setViewOnly());
        }}
      />
      <div className="not-found-page">
        <h1>Settings</h1>
      </div>
    </Fragment>
  );
};

export default Settings;
