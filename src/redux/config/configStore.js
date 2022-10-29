import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// ----- import slice -----
import storeSlice from "../modules/storeSlice";
import menuSlice from "../modules/menuSlice";

const store = configureStore({
  reducer: { storeSlice, menuSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
