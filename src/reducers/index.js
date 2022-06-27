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
export default function movies(state = initialMovieState, action) {
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
