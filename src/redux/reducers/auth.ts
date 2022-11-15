import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access_token:`Bearer 5c1879b57b924bab86919bf1b250edf5
    `
};

const everythingSlice = createSlice({
  name: "auth",
  initialState,
  reducers:{},
  extraReducers:{}
});

export default everythingSlice.reducer;