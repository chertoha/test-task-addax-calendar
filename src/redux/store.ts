import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/slice";
import { holidaysApi } from "./holidays/holidaysApi";

export const store = configureStore({
  reducer: {
    [tasksSlice.reducerPath]: tasksSlice.reducer,
    [holidaysApi.reducerPath]: holidaysApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(holidaysApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
