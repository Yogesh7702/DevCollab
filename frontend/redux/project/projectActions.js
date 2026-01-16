import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "project/fetchProjects",
  async () => {
    
    return [
      { id: 1, name: "DevCollab Platform" },
      { id: 2, name: "Realtime Chat App" },
    ];
  }
);