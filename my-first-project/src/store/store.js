import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./cardsSlice";

const logger = () => (next) => (action) => {
  console.log("dispatching", action);
  return next(action);
};

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
