import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

function Home() {
  // console.log("first", API_KEY);
  // console.log("second", movieApi);
  const dispatch = useDispatch();

  const API_URL = process.env.REACT_APP_MOVIE_URL;
  const API_VAL = process.env.REACT_APP_MOVIE_API_KEY;

  console.log("dfhahdjfha", API_URL, API_VAL);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
