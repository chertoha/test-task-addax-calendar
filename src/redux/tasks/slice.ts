import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../../types/entities";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  items: TaskType[];
};

const initialState: InitialState = {
  items: [
    {
      id: 1,
      value: "task 1",
      date: new Date().toISOString(),
      order: 1,
    },

    {
      id: 2,
      value: "task 2",
      date: new Date(2025, 0, 2).toISOString(),
      order: 1,
    },

    {
      id: 3,
      value: "task 3",
      date: new Date(2025, 0, 20).toISOString(),
      order: 1,
    },

    {
      id: 4,
      value: "task 4",
      date: new Date(2025, 0, 2).toISOString(),
      order: 2,
    },

    {
      id: 5,
      value: "task 5",
      date: new Date(2025, 0, 2).toISOString(),
      order: 3,
    },

    {
      id: 6,
      value: "task 6",
      date: new Date(2025, 0, 2).toISOString(),
      order: 4,
    },

    {
      id: 7,
      value: "task 7",
      date: new Date(2025, 0, 2).toISOString(),
      order: 5,
    },
  ],
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
  },
});

export const { addTask, updateTaskDate, updateBunch } = tasksSlice.actions;

export default tasksSlice;
