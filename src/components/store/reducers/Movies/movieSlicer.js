import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommended: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectedRecommended = (state) => state.movie.recommended;
export const selectedNewDisney = (state) => state.movie.newDisney;
export const selectedOriginal = (state) => state.movie.original;
export const selectedTrending = (state) => state.movie.trending;

export default movieSlice.reducer;