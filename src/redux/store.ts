import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import tasksSlice, { persistedTasksReducer } from "./tasks/slice";
import calendarSlice from "./calendar/slice";
import { holidaysApi } from "./holidays/holidaysApi";

export const store = configureStore({
  reducer: {
    [tasksSlice.reducerPath]: persistedTasksReducer,
    [calendarSlice.reducerPath]: calendarSlice.reducer,
    [holidaysApi.reducerPath]: holidaysApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(holidaysApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
