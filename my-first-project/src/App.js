import Header from "./components/Header";
import "./components/Header.css";
import "./App.css";
import React, { useEffect, Suspense, Fragment } from "react";
import styled from "styled-components";
import CardList from "./components/CardList";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { cardsActions, getCardsData } from "./store/cardsSlice";

const DeleteButton = styled.button`
  position: relative;
  left: 180px;
  top: 4px;
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
  position: relative;
  left: 200px;
  top: 20px;
  width: 120px;
  height: 60px;
  background-color: #651679;
  border: none;
  color: white;
  text-align: center;
  font-size: 15px;
  border-radius: 12px;
`;

const SignInForm = React.lazy(() => import("./components/SignInForm"));
const CardById = React.lazy(() => import("./components/CardById"));
const Settings = React.lazy(() => import("./components/Settings"));

function App() {
  const dispatch = useDispatch();
  const viewOnlyMode = useSelector((state) => state.cards.viewOnly);
  const userMode = useSelector((state) => state.user.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCardsData());
  }, [dispatch]);

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<p>Is loading</p>}>
        <Routes>
          <Route
            path="/home"
            element={
              <main>
                <div className="view-only-header">
                  {!userMode &&
                    "If you want to edit/add or delete cards, please sign in"}
                </div>
                {!viewOnlyMode && userMode && (
                  <Fragment>
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
                  </Fragment>
                )}
                <CardList />
              </main>
            }
          />
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/card/:id" element={<CardById />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}

export default App;
