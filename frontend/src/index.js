import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
//REDUX
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { searchQuery } from "./reducers/searchQuery";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import allReducers from "./reducers/index";

// const initialState = {
//   query: "",
// };

const store = createStore(
  allReducers,
  compose(applyMiddleware(thunk), composeWithDevTools())
);
//null arg represents initialState

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
