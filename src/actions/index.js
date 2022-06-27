export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SET_ISFAV = "ISFAV";

export function addMovies(movies) {
  return {
    type: "ADD_MOVIES",
    movies: movies,
  };
}

export function addFavourite(movie) {
  return {
    type: "ADD_FAVOURITES",
    movies: movie,
  };
}

export function removeFavourite(movie) {
  return {
    type: "REMOVE_FAVOURITES",
    movies: movie,
  };
}

export function isFav(stat) {
  return {
    type: "ISFAV",
    isfav: stat,
  };
}
