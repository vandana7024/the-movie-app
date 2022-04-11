import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { API_KEY } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${movieText}&type="movie"`
    );

    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&s=${seriesText}&type="series"`
    );

    return response.data;
  }
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    console.log("ID", id);
    const response = await movieApi.get(
      `?apiKey=${API_KEY}&i=${id}&plot="full"`
    );

    return response.data;
  }
);

const initialState = {
  movies: {},
  selectMovieOrShow: {},
  shows: {},
};
const movieSilce = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },
    removeSelectMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return {
        ...state,
        movies: payload,
      };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return {
        ...state,
        shows: payload,
      };
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("fulfilled");
      return {
        ...state,
        selectMovieOrShow: payload,
      };
    },
  },
});

export const { removeSelectMovieOrShow } = movieSilce.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSilce.reducer;
