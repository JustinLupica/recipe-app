import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
//REDUX
import { createStore } from "redux";
import recipeReducer from "./reducers/recipeReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const store = createStore(recipeReducer, null, composeWithDevTools());
//null arg represents initialState

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
