import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import App from "./App";

const container = document.getElementById('root');
const root = createRoot(container);

var storage = window.localStorage;
const KEY = "taskCollection";

const storageCollection = JSON.parse(storage.getItem(KEY)) || {}

const store = createStore(reducers, storageCollection);

store.subscribe(() => {
  const taskCollection = JSON.stringify(store.getState());

  storage.setItem(KEY, taskCollection)
})

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
