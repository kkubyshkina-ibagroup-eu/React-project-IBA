import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";
import userReducer from "./userSlice";

const logger = () => (next) => (action) => {
  console.log("dispatching", action);
  return next(action);
};

const store = configureStore({
  reducer: {
    cards: cardsReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
