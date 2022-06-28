import { act } from "react-dom/test-utils";
import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  SET_ISFAV,
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
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
};
export function search(state = initialSearchState, action) {
  return state;
}

const initialRootState = {
  movies: initialMovieState,
  search: initialSearchState,
};

export default function rootReducer(state = initialRootState, action) {
  return {
    movies: movies(state.movies, action),
    search: search(state.search, action),
  };
}
