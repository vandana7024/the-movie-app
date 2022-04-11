import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectMovieOrShow,
  removeSelectMovieOrShow,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

function MovieDetail() {
  const dispatch = useDispatch();
  const { imdbId } = useParams();
  const data = useSelector(getSelectMovieOrShow);
  console.log("data", data);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbId));
    return () => {
      dispatch(removeSelectMovieOrShow());
    };
  }, [dispatch, imdbId]);
  return (
    <div className="movie-section">
      <>
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>
              IMDB Rating: <i className="fa fa-star">:{data.imdbRating}</i>
            </span>
            <span>
              IMDB Votes: <i className="fa fa thumbs-up">:{data.imdbVotes}</i>
            </span>
            <span>
              IMDB Runtime: <i className="fa fa-film">:{data.Runtime}</i>
            </span>
            <span>
              IMDB Year: <i className="fa fa-calander">:{data.Year}</i>
            </span>
          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>
          </div>
        </div>
        <div className="section-right">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </>
    </div>
  );
}

export default MovieDetail;
