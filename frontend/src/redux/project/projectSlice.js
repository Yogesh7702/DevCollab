import { createSlice } from "@reduxjs/toolkit";
import { fetchProjects } from "./projectActions";

const initialState = {
  projects: [],
  loading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
