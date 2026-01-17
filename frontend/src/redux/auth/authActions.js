import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async({email, password}, thunkAPI) => {
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", {
                email, 
                password,
            });

            return res.data;
        }catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message || "Login failed"
            );
        }
    }
);