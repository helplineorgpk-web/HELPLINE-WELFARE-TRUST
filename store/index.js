import { configureStore } from '@reduxjs/toolkit';
import { ublApi } from '../services/ublApi';

export const store = configureStore({
  reducer: {
    [ublApi.reducerPath]: ublApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ublApi.middleware),
});

export default store;
