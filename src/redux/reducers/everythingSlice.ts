import { createSlice } from "@reduxjs/toolkit";
import { everythingApi } from "../../services/everythingApi";

const initialState = {
    everything:{}
};

const everythingSlice = createSlice({
  name: "everything",
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addMatcher(everythingApi.endpoints.getData.matchFulfilled, (state, {payload}) => ({
        everything:payload
    }))
  }
});

export default everythingSlice.reducer;