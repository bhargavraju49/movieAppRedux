export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const SET_ISFAV = "ISFAV";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
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

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie) {
  const url = `https://www.omdbapi.com/?i=tt3896198&apikey=2ff7a77f&t=${movie}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        //dispatch an action
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
