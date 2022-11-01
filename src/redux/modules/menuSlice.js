import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/apis";

// ----- InitialState -----
const initialState = {
  menus: [{}],
  isLoading: false,
};

// ----- 해당 스토어 정보 get -----
export const getAllMenu = createAsyncThunk(
  "menus/getAllMenu",
  async (storeId, thunkAPI) => {
    console.log("storeId", storeId);
    try {
      const res = await api.get(`/store/${storeId}`);
      return thunkAPI.fulfillWithValue(res.data.data[0].Menus);
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
      state.isLoading = false;
      state.menus = action.payload;
    });
    builder.addCase(getAllMenu.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// ----- export -----
export default menuSlice.reducer;
