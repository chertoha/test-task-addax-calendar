import {
  calculateStartDate,
  DAYS_IN_WEEK,
  getStartTodayMonthDate,
} from "@/helpers/calculateCalendar";
import { addDays, addMonths } from "@/utils/date";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  monthDate: string;
  weekDate: string | null;
  isMonthMode: boolean;
};

const initialState: InitialState = {
  monthDate: getStartTodayMonthDate().toISOString(),
  weekDate: null,
  isMonthMode: true,
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState,

  reducers: {
    setMonthDate: (state, { payload }: PayloadAction<string>) => {
      state.monthDate = payload;
    },

    setWeekDate: (state, { payload }: PayloadAction<string>) => {
      state.weekDate = payload;
    },

    increaseMonthDate: state => {
      const date = new Date(state.monthDate);

      state.monthDate = addMonths(date, 1).toISOString();
    },

    decreaseMonthDate: state => {
      const date = new Date(state.monthDate);

      state.monthDate = addMonths(date, -1).toISOString();
    },

    increaseWeekDate: state => {
      const { weekDate, monthDate } = state;

      let date: Date;
      if (!weekDate) {
        date = calculateStartDate(new Date(monthDate));
      } else {
        date = new Date(weekDate);
      }

      state.weekDate = addDays(date, DAYS_IN_WEEK).toISOString();
    },

    decreaseWeekDate: state => {
      const { weekDate, monthDate } = state;

      let date: Date;
      if (!weekDate) {
        date = calculateStartDate(new Date(monthDate));
      } else {
        date = new Date(weekDate);
      }

      state.weekDate = addDays(date, -DAYS_IN_WEEK).toISOString();
    },

    clearWeekDate: state => {
      state.weekDate = null;
    },

    setMonthMode: state => {
      state.isMonthMode = true;
    },

    setWeekMode: state => {
      state.isMonthMode = false;
    },

    resetCalendarState: () => initialState,
  },
});

export const {
  setMonthDate,
  setWeekDate,
  clearWeekDate,
  setMonthMode,
  setWeekMode,
  decreaseMonthDate,
  increaseMonthDate,
  decreaseWeekDate,
  increaseWeekDate,
  resetCalendarState,
} = calendarSlice.actions;

export default calendarSlice;
