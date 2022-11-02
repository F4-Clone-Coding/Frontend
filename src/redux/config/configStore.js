import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// ----- import slice -----
import stores from "../modules/storeSlice";
import menus from "../modules/menuSlice";
import user from "../modules/userSlice";
import orders from '../modules/orderSlice';

const store = configureStore({
  reducer: { stores, menus, user, orders },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;
