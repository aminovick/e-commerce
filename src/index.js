import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reducers from "./store/reducers";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import {persistStore} from 'redux-persist'
import { PersistGate } from "redux-persist/integration/react";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
const persistStor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistStor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
