import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/apis";

// ----- InitialState -----
const initialState = {
  orders: [{}],
  isLoading: false,
};

// ----- 해당 스토어 주문 get -----
export const orderGet = createAsyncThunk(
  "menus/orederGet",
  async (payload, thunkAPI) => {
    try {
      const res = await api.get(`/order/${payload}`)
      return thunkAPI.fulfillWithValue(res.data)
    } catch (err) {
      return thunkAPI.rejectWithValue(err)
    }
  }
);

// ----- slice -----
const orderSlice = createSlice({
  name: "orders",
  initialState,

  // ----- reducer -----
  reducers: {},

  // ----- extraReducer -----
  extraReducers: (builder) => {
    // ----- 해당 주문내역 조회(orderId 비교) ----- 
    builder.addCase(orderGet.fulfilled, (state, action) => {
      state.isLoading = false;
      state.orders = state.orders.filter((order) => 
        order.orderId === action.payload
    )});
    builder.addCase(orderGet.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// ----- export -----
export default orderSlice.reducer;
