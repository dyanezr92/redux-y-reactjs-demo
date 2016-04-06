import "bootstrap/css/bootstrap";
import "app/custom-styles";
import React from "react";
import { render } from "react-dom";
import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import appReducer from "app/reducers";
import CommentedPicture from "app/components";


const store = createStore(
  appReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

if (module.hot) {
  module.hot.accept("./reducers", () => {
    const nextReducer = require("./reducers").default;
    store.replaceReducer(nextReducer);
  });
}

render(
  <Provider store={store}>
    <CommentedPicture />
  </Provider>,
  document.getElementById("app")
);
