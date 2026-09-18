import React from "react";

function WatchList({ watchlist, remove }) {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="fw-bold mb-4">My Watchlist ({watchlist.length})</h2>

      {watchlist.length === 0 ? (
        <p className="text-secondary">No movies added to your watchlist.</p>
      ) : (
        <div className="row g-4">
          {watchlist.map((movie) => (
            <div className="col-md-3" key={movie.id}>
              <div className="card shadow-sm border-1">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{movie.title}</h5>

                  <p className="card-text text-secondary">
                    Genre: {movie.genre}
                  </p>

                  <p className="card-text text-secondary">Year: {movie.year}</p>

                  <p className="card-text">⭐ {movie.rating}</p>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => remove(movie.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchList;
