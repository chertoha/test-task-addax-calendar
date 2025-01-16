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
      order: 1,
    },

    {
      id: 2,
      value: "How to use Trello Like a Pro",
      date: new Date(2025, 0, 2).toISOString(),
      order: 1,
    },

    {
      id: 3,
      value: "Common Questions",
      date: new Date(2025, 0, 20).toISOString(),
      order: 1,
    },

    {
      id: 4,
      value: "How We Structure Our CSS",
      date: new Date(2025, 0, 2).toISOString(),
      order: 2,
    },

    {
      id: 5,
      value: "Create Cards via Email",
      date: new Date(2025, 0, 2).toISOString(),
      order: 3,
    },

    {
      id: 6,
      value: "Temp1",
      date: new Date(2025, 0, 2).toISOString(),
      order: 4,
    },

    {
      id: 7,
      value: "Temp2",
      date: new Date(2025, 0, 2).toISOString(),
      order: 5,
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
