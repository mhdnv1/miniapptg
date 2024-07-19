// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import {socialMediaApi} from './socialMediaApi'

export const store = configureStore({
  reducer: {
    [socialMediaApi.reducerPath]: socialMediaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(socialMediaApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
