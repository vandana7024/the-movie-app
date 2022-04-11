import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../../component/MovieCard/MovieCard";
import "./MovieListing.scss";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return (
          <>
            <MovieCard key={index} data={movie} />
          </>
        );
      })
    ) : (
      <div className="movie-error"> {movies.error}</div>
    );
  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return (
          <>
            <MovieCard key={index} data={show} />
          </>
        );
      })
    ) : (
      <div className="movie-error"> {shows.error}</div>
    );
  console.log("ren", renderShows);
  console.log("movies", shows);
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h1>Movies</h1>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="movie-show">
        <h1>Show</h1>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
}

export default MovieListing;
