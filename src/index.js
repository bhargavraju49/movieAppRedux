import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import rootReducer from "./reducers";

// adding middleware
//function logger ( obj , next , action)
//logger(obj)(next)(action)

// const logger = function ({ dispatch, getState }) {
//   return function (next) {
//     return function (action) {
//       //middle ware
//       console.log("ACTION_TYPE", action.type);
//       next(action);
//     };
//   };
// };

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    console.log("ACTION_TYPE", action.type);
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger));
// console.log("state", store.getState());
// console.log("store", store);

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "superman" }],
// });

// console.log("after state", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
