import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import "../index.css";
import { data } from "../data";
import { addMovies, isFav } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));
    console.log(store.getState());
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  getfav = (val) => {
    this.props.store.dispatch(isFav(val));
  };
  render() {
    console.log("RENDER");
    console.log(this.props.store.getState());
    const { movies } = this.props.store.getState();
    const { list, favourites, isfav } = movies;
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="main">
          <div className="tabs">
            <div
              className={!isfav ? "tab active-tabs" : "tab"}
              onClick={() => {
                this.getfav(false);
              }}
            >
              Movies
            </div>
            <div
              className={isfav ? "tab active-tabs" : "tab"}
              onClick={() => {
                this.getfav(true);
              }}
            >
              Favourites
            </div>
          </div>
        </div>
        {!isfav ? (
          <div className="List">
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        ) : (
          <div className="List">
            {favourites.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        )}
        {!isFav && list.length === 0 && (
          <div className="no-movies">NO movies</div>
        )}
        {isFav && favourites.length === 0 && <div>NO movies</div>}
      </div>
    );
  }
}

export default App;
