import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // [authApi.reducerPath]: authApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
