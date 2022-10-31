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
  async (payload, thunkAPI) => {
    try {
      const res = await api.get(`/store/${payload}`);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const orderMenu = createAsyncThunk(
//   "menus/orederMenu",
//   async (payload, thunkAPI) => {
//     try {
//       const res = await api.post(`/store/${payload}`)
//     }
//   }
// )

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
