import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// ----- import slice -----
import stores from "../modules/storeSlice";
import menus from "../modules/menuSlice";

const store = configureStore({
  reducer: { stores, menus },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
