import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
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
