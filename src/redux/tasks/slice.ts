import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../../types/entities";

type InitialState = {
  items: TaskType[];
};

const initialState: InitialState = {
  items: [
    {
      id: 1,
      value: "How to Structure Additional Calendar",
      date: new Date().toISOString(),
    },

    {
      id: 2,
      value: "How to use Trello Like a Pro",
      date: new Date(2025, 0, 2).toISOString(),
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask: (state, { payload }) => {
      state.items.push(payload);
    },

    updateTaskDate: (state, { payload }) => {
      state.items = state.items.map(task =>
        task.id.toString() === payload.id.toString() ? { ...task, date: payload.date } : task
      );
    },
  },
});

export const { addTask, updateTaskDate } = tasksSlice.actions;

export default tasksSlice;
