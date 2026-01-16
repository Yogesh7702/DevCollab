import {createSlice} from "@reduxjs/toolkit";
import {fetchProjects} from "./projectActions";

const initialState = {
    list: [],
    loading: false,
    error: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      });
  },
});

export default projectSlice.reducer;