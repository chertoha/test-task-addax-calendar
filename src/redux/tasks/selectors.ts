import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addDays } from "@/utils/date";

export const selectSearch = (state: RootState) => state.tasks.search;

export const selectTasks = (state: RootState) => state.tasks.items;

export const selectTasksByDates = createSelector(
  [
    selectTasks,
    selectSearch,
    (_state: RootState, startDate: Date, _daysCount: number) => startDate,
    (_state: RootState, _startDate: Date, daysCount: number) => daysCount,
  ],
  (tasks, search, startDate, daysCount) => {
    const from = startDate;
    const to = addDays(startDate, daysCount);

    return tasks.filter(
      ({ date, value }) =>
        new Date(date) >= from &&
        new Date(date) < to &&
        value.toLowerCase().includes(search.toLowerCase())
    );
  }
);
