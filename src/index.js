// Store - Is the object that brings together the actions and reducers, the store also has the following responsibilities:
// - Holds the applications state
// - Allows access to the state via getState();
// - Allows the state to be updated via dispatch(action)l;
// - Registers listeners via subscribe(listener);
// - Handles unregistering of listeners vis the function returned by subscribe(listener);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { render } from "react-dom";

// We will only have a single store in a redux application, when we split the data like we have in our application we'll use reducer composition rather than many stores.
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";
import { createStore } from "redux";
import todoApp from "./reducers";
const store = createStore(todoApp);

// Log the initial state of our app
console.log(store.getState());

// Every time the state changes, log it
// Note: Subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Dispatch some actions (testing)
store.dispatch(addTodo("Learn about actions"));
store.dispatch(addTodo("Learn about reducers"));
store.dispatch(addTodo("Learn about store"));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// Stop listening to state updates
unsubscribe();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
