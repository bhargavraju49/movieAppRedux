import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import "../index.css";
import { data } from "../data";
function App() {
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
        {data.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
