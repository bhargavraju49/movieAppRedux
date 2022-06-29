import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
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
    if (typeof action !== "function") {
      console.log("ACTION_TYPE", action.type);
    }
    next(action);
  };

// const thunk =
//   ({ dispatch, getState }) =>
//   (next) =>
//   (action) => {
//     console.log("ACTION_TYPE", action.type);
//     if (typeof action == "function") {
//       action(dispatch);
//       return;
//     }
//     next(action);
//   };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));
console.log("state", store.getState());

export const StoreContext = createContext();
console.log("store context", StoreContext);

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

// console.log("store", store);

// store.dispatch({
//   type: "ADD_MOVIES",
//   movies: [{ name: "superman" }],
// });

// console.log("after state", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
