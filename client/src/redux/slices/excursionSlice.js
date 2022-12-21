import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

const initialState = {
  loading: false,
  moreDestinations: [],
  excursions: [],
  enquiryExcursion: [],
};

export const getMoreDestinations = createAsyncThunk(
  "excursion/getMoreDestinations",
  async (args, { getState }) => {
    // const { token } = getState().user
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Request-Headers": "Content-Type, Authorization",
      },
    };
    const response = await axios.get("/general/state?format=json", config);
    return response.data;
  }
);
export const getExcursions = createAsyncThunk(
  "excursion/getExcursions",
  async (args, { getState }) => {
    // const { token } = getState().user
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,OPTIONS,POST,PUT",
      },
    };
    const response = await axios.get("/tour/exe/?format=json");
    return response.data;
  }
);

const excursionSlice = createSlice({
  name: "excursion",
  initialState,
  extraReducers: {
    [getMoreDestinations.pending]: (state, action) => {
      state.loading = true;
    },
    [getMoreDestinations.fulfilled]: (state, action) => {
      state.loading = false;
      state.moreDestinations = action.payload;
    },
    [getExcursions.pending]: (state, action) => {
      state.loading = true;
    },
    [getExcursions.fulfilled]: (state, action) => {
      state.loading = false;
      state.excursions = action.payload;
    },
  },
});

// export const {
// } = excursionSlice.actions

export default excursionSlice.reducer;
