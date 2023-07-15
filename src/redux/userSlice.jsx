import { createSlice } from "@reduxjs/toolkit";
import { localService } from "../services/localStoreService";

const initialState = {
  // sẽ được chạy khi user load trang
  userInfo: localService.getUser(),
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
