import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

import instance from "../../shared/apis";

// ----- InitialState -----
const initialState = {
  isLoading: false,
};
/**유저 정보 가져오기 */
export const getUser = createAsyncThunk("user/getUser", async (_, thunkAPI) => {
  try {
    const res = await instance.get("/user");
    console.log("res", res);
    return thunkAPI.fulfillWithValue(res.data);
  } catch (err) {
    return thunkAPI.rejectWithValue(err);
  }
});

/**유저 닉네임 수정하기 */
export const editUserName = createAsyncThunk(
  "user/editUserName",

  async (userData, thunkAPI) => {
    try {
      console.log("dd", userData);
      const { data } = await instance.patch("/user", userData);
      console.log("data", data.nickname);
      return thunkAPI.fulfillWithValue(data.nickname);
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
const { data } = await instance.patch("/user/password", userDeta);
Swal.fire({
icon: "success",
title: "비밀번호 변경 완료!",
text: "비밀번호를 성공적으로 변경되었습니다!",
width: 350,
heigt: 200,
background:
"#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
showConfirmButton: false,
timer: 1500,
});
return thunkAPI.fulfillWithValue(data);
} catch (error) {
Swal.fire({
icon: "error",
title: "번호 변경 실패!",
text: "기존 비밀번호와 다릅니다!",
width: 350,
heigt: 200,
background:
"#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
showConfirmButton: false,
timer: 1500,
});
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
