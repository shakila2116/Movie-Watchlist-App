import React from "react";

function Moviecard({ movies, handleWatchlist, watchlist }) {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Movie List</h2>

      <div className="row g-4">
        {movies.map((movie) => {
          const isAdded = watchlist.some((item) => item.id === movie.id);

          return (
            <div className="col-md-3" key={movie.id}>
              <div className="card shadow-sm border-1">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{movie.title}</h5>

                  <p className="card-text text-secondary">
                    Genre: {movie.genre}
                  </p>

                  <p className="card-text text-secondary">Year: {movie.year}</p>

                  <p className="card-text fw-semibold">⭐ {movie.rating}</p>

                  <button
                    type="button"
                    className="btn btn-primary btn-sm w-100"
                    onClick={() => handleWatchlist(movie)}
                    disabled={isAdded}
                  >
                    {isAdded ? "Added" : "Add to Watchlist"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Moviecard;
