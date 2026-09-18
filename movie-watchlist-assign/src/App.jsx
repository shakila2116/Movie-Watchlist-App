import React, { useEffect, useState } from "react";
import Moviecard from "./components/Moviecard";
import WatchList from "./components/WatchList";
import axios from "axios";
import "./App.css";

function App() {
  const [movies, setmovies] = useState([]);
  const [watchlist, setwatchlist] = useState([]);
  function handleWatchlist(movie) {
    const alreadyAdded = watchlist.some((item) => item.id === movie.id);

    if (!alreadyAdded) {
      setwatchlist([...watchlist, movie]);
    }
  }
  function remove(id) {
    setwatchlist(watchlist.filter((movie) => movie.id !== id));
  }
  useEffect(() => {
    axios
      .get("/movies.json")
      .then((response) => {
        setmovies(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching movies");
      });
  }, []);

  return (
    <div>
      <Moviecard
        movies={movies}
        handleWatchlist={handleWatchlist}
        watchlist={watchlist}
      />

      <WatchList watchlist={watchlist} remove={remove} />
    </div>
  );
}

export default App;
