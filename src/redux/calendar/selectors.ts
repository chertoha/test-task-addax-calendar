import { RootState } from "../store";

export const selectMonthMode = (state: RootState) => state.calendar.isMonthMode;

export const selectMonthDate = (state: RootState) => state.calendar.monthDate;

export const selectWeekDate = (state: RootState) => state.calendar.weekDate;
