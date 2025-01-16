import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/slice";

export const store = configureStore({
  reducer: {
    [tasksSlice.reducerPath]: tasksSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
