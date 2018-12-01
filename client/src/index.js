import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import * as serviceWorker from "./serviceWorker";
import AppRedux from "./components/AppRedux";

ReactDOM.render(
  <Provider store={store}>
    <AppRedux />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
