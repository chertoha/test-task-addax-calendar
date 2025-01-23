import storage from "redux-persist/lib/storage";
import type { PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { createSlice } from "@reduxjs/toolkit";

import { TaskType } from "../../types/entities";
import { initialTasks } from "@/utils/initialTasks";

type InitialState = {
  items: TaskType[];
  search: string;
};

const initialState: InitialState = {
  items: initialTasks,
  search: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask: (state, { payload }: PayloadAction<TaskType>) => {
      state.items.push(payload);
    },

    updateTaskDate: (state, { payload }) => {
      state.items = state.items.map(task =>
        task.id.toString() === payload.id.toString() ? { ...task, date: payload.date } : task
      );
    },

    updateBunch: (state, { payload }: PayloadAction<TaskType[]>) => {
      state.items = state.items.map(task => {
        const incomingTask = payload.find(({ id }) => task.id === id);

        if (!incomingTask) return task;

        return { ...task, ...incomingTask };
      });
    },

    updateTask: (state, { payload }: PayloadAction<TaskType>) => {
      state.items = state.items.map(task => (task.id === payload.id ? payload : task));
    },

    removeTask: (state, { payload }: PayloadAction<number | string>) => {
      state.items = state.items.filter(({ id }) => id !== payload);
    },

    updateSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
  },
});

const tasksPersistConfig = {
  key: "tasks",
  storage,
  whitelist: ["items"],
};

export const persistedTasksReducer = persistReducer(tasksPersistConfig, tasksSlice.reducer);

export const { addTask, updateTaskDate, updateBunch, updateTask, removeTask, updateSearch } =
  tasksSlice.actions;

export default tasksSlice;
