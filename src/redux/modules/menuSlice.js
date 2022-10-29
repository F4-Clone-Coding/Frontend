import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ----- InitialState -----
const initialState = {
  menus: [{}],
  isLoading: false,
};

// ----- 해당 스토어 정보 get -----
export const getAllMenu = createAsyncThunk(
  "menus/getAllMenu",
  async (storeId, thunkAPI) => {
    try {
      const res = await axios.get(`http://localhost:3001/store/${storeId}`);
      return thunkAPI.fulfillWithValue(res.data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// ----- slice -----
const menuSlice = createSlice({
  name: "menus",
  initialState,

  // ----- reducer -----
  reducers: {},

  // ----- extraReducer -----
  extraReducers: (builder) => {
    /* ----------- getAllMenu(해당 스토어의 메뉴 등 정보 조회) ---------------- */
    builder.addCase(getAllMenu.fulfilled, (state, action) => {
      state.menus = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllMenu.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// ----- export -----
export default menuSlice.reducer;
