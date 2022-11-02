import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from '../../shared/apis'

// ----- InitialState -----
const initialState = {
  isLoading: false,
};

// ----- 해당 스토어 주문 get -----
export const orderGet = createAsyncThunk(
  "menus/orederGet",
  async (payload, thunkAPI) => {
    console.log('payload', payload)
    try {
      const res = await instance.get(`/order/${payload}`)
      console.log("res.data.order", res.data.order);
      return thunkAPI.fulfillWithValue(res.data.order);
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
      state.orders = action.payload;
    });
    builder.addCase(orderGet.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// ----- export -----
export default orderSlice.reducer;
