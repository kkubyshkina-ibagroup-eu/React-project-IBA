import Header from "./components/Header";
import "./components/Header.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import CardList from "./components/CardList";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import SignInForm from "./components/SignInForm";
import CardById from "./components/CardById";

import { useDispatch } from "react-redux/es/exports";
import { cardsActions, getCardsData } from "./store/cardsSlice";

const ViewOnlyCheckbox = styled.input`
  accent-color: #651679;
  position: relative;
  left: 150px;
  bottom: 10px;
  width: 30px;
  height: 30px;
`;

const DeleteButton = styled.button`
  position: absolute;
  left: 200px;
  top: 200px;
  width: 120px;
  height: 60px;
  background-color: #651679;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: left;
  font-size: 15px;
  border-radius: 12px;
  padding-top: 5px;
`;

const AddCard = styled.button`
  position: absolute;
  left: 330px;
  top: 200px;
  width: 120px;
  height: 60px;
  background-color: #651679;
  border: none;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 12px;
`;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCardsData());
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <main>
              <div className="view-only-header">View only</div>
              <ViewOnlyCheckbox
                type="checkbox"
                onChange={() => {
                  dispatch(cardsActions.setViewOnly());
                }}
              />
              <DeleteButton
                onClick={() => {
                  dispatch(cardsActions.deleteCard());
                }}
              >
                Delete selected cards
              </DeleteButton>
              <AddCard
                onClick={() => {
                  dispatch(cardsActions.addCard());
                }}
              >
                Add card
              </AddCard>
              <CardList />
            </main>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/card/:id" element={<CardById />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
