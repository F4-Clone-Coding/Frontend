import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from '../../shared/apis';

// ----- InitialState -----
const initialState = {
  stores: [],
  isLoading: false,
};

// ----- 모든 스토어 get -----
export const getAllStore = createAsyncThunk(
  "stores/getAllStore",
  async (_, thunkAPI) => {
    try {
      const res = await api.get("/");
      console.log("res", res);
      return thunkAPI.fulfillWithValue(res.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// ----- 해당 카테고리의 스토어 get -----
export const getStore = createAsyncThunk(
  "stores/getStore",
  async (categoryId, thunkAPI) => {
    try {
      const res = await api.get(`/${categoryId}`);
      return thunkAPI.fulfillWithValue(res.data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// ----- slice -----
const storeSlice = createSlice({
  name: "stores",
  initialState,

  // ----- reducer -----
  reducers: {},

  // ----- extraReducer -----
  extraReducers: (builder) => {
    /* ----------- getAllStore(모든 스토어 목록 get) ---------------- */
    builder.addCase(getAllStore.fulfilled, (state, action) => {
      state.stores = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getAllStore.rejected, (state) => {
      state.isLoading = false;
    });

    /* ----------- getStore(해당 카테고리의 스토어 목록 get) ---------------- */
    builder.addCase(getStore.fulfilled, (state, action) => {
      state.stores = state.stores.filter(
        (store) => store.categoryId === action.payload
      );
      state.isLoading = false;
    });
    builder.addCase(getStore.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

// ----- export -----
export default storeSlice.reducer;
