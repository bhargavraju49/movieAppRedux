import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import "../index.css";
import { data } from "../data";
import { addMovies } from "../actions";
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

  render() {
    console.log("RENDER");
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
        </div>
        <div className="List">
          {list.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
