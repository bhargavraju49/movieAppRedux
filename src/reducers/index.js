import { combineReducers } from "@reduxjs/toolkit";
import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  SET_ISFAV,
  ADD_SEARCH_RESULT,
  ADD_MOVIE_TO_LIST,
} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  isfav: false,
};
export function movies(state = initialMovieState, action) {
  // if (action.type == ADD_MOVIES) {
  //   return {
  //     ...state,
  //     list: action.movies,
  //   };
  // }
  // return state;
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      console.log(action.state);
      return {
        ...state,
        favourites: [action.movies, ...state.favourites],
      };

    case REMOVE_FAVOURITES:
      console.log(action.state);
      return {
        ...state,
        favourites: [...state.favourites].filter((mov) => {
          return mov != action.movies;
        }),
      };
    case SET_ISFAV:
      console.log(action.isfav, "**************");
      return {
        ...state,
        isfav: action.isfav,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
  showSearchResults: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST: //while dispatching every reducer will be called
      return {
        ...state,
        showSearchResults: false,
      };
  }
  return state;
}

// const initialRootState = {
//   movies: initialMovieState,
//   search: initialSearchState,
// };

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
