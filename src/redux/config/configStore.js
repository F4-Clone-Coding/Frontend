import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import categorySlice from "../modules/categorySlice";
import storeSlice from "../modules/menuSlice";

const store = configureStore({
  reducer: { storeSlice, menuSlice, orderSlice, userSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});
export default store;
