import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import "../index.css";
import { data } from "../data";
import { addMovies, isFav } from "../actions";
import { search } from "../reducers";
import { StoreContext } from "../index";
import { connect } from "../index";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  getfav = (val) => {
    this.props.dispatch(isFav(val));
  };
  render() {
    console.log("RENDER");

    const { movies, search } = this.props;
    const { list, favourites, isfav } = movies;

    return (
      <div className="App">
        <Navbar search={search}></Navbar>
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
            {list.length === 0 && "No movies"}
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        ) : (
          <div className="List">
            {favourites.length === 0 && "No movies"}
            {favourites.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={index}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        )}
        {/* {list.length === 0 && <div className="no-movies">NO movies</div>} */}
        {/* {!isFav && favourites.length === 0 ? "" : <div>No movies</div>} */}
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }

//2---->>>  call back take state and return required data
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}

//1--->>>  call back to get the data
//3--->>>  arg represents which component needs the data extracted from state using call back

const connectedAppComponent = connect(mapStateToProps)(App);

// data comes as props in to app and creats new comp to connectedappcomponent
// now export this

export default connectedAppComponent;
