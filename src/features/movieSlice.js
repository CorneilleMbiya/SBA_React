import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMovie = createAsyncThunk('movie/fetchMovie', async (title) => {
  const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=61e81a14`);
  return response.json();
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movie: {},
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovie.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovie.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload;
      });
  },
});

export default movieSlice.reducer;