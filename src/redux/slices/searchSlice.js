import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchSongs = createAsyncThunk(
  "search/fetchSongs",
  async (artistName) => {
    const response = await fetch(
      `https://www.theaudiodb.com/api/v1/json/2/searchalbum.php?s=${artistName}`
    );
    if (!response.ok) {
      throw new Error("Error al cargar canciones");
    }
    const data = await response.json();
    return data.album || [];
  }
);
const initialState = {
  results: [],
  loading: false,
  error: null
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {
  resetResults
} = searchSlice.actions;

export default searchSlice.reducer;