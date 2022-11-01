import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/apis";

// ----- InitialState -----
const initialState = {
  user: [],
  isLoading: false,
};
/**유저 정보 가져오기 */
export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  try {
    const res = await api.get("/");
    console.log("res", res);
    return thunkAPI.fulfillWithValue(res.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

/**유저 닉네임 수정하기 */
export const editUserName = createAsyncThunk(
  "user/editUserName",
  async (userDeta, thunkAPI) => {
    try {
      const { data } = await api.patch("/user/nickname", userDeta);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

/**유저 비밀번호 수정하기 */
export const editUserPw = createAsyncThunk(
  "user/editUserPw",
  async (userDeta, thunkAPI) => {
    try {
      const { data } = await api.patch("/user/password", userDeta);
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// ----- slice -----
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    /**유저 정보 가져오기 */
    [getUser.pending]: (state) => {
      state.isLoading = true;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [getUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    /**유저 닉네임 변경하기 */
    [editUserName.pending]: (state) => {
      state.isLoading = true;
    },
    [editUserName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [editUserName.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    /**유저 비밀번호 변경하기 */
    [editUserPw.pending]: (state) => {
      state.isLoading = true;
    },
    [editUserPw.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    [editUserPw.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// ----- export -----
export default userSlice.reducer;
