import { configureStore } from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";

const middleware = [thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;