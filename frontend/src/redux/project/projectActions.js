import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:5000/api/projects");
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);