import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoApi";
import { cryptoExchange } from "../services/cryptoExchange";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoExchange.reducerPath]: cryptoExchange.reducer,
  },
  middleware: (mid) =>
    mid().concat(cryptoApi.middleware, cryptoExchange.middleware),
});
