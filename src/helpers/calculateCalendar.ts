import { addDays } from "@/utils/date";

export const DAYS_IN_WEEK = 7;
export const WEEKS_IN_CALENDAR = 6;

// export const calculateMonthCalendar = (offset: number) => {
//   const startTodayMonthDate = getCurrentMonthStartDate();
//   const date = addMonths(startTodayMonthDate, offset);

//   const startMonthDate = new Date(date.getFullYear(), date.getMonth(), 1);
//   const startMonthWeekday = startMonthDate.getDay();

//   const startDate = addDays(startMonthDate, -startMonthWeekday);
//   return Array.from(Array(42)).map((_, i, arr) => (arr[i] = addDays(startDate, i)));
// };

// export const calculateWeekCalendar = (_monthOffset: number, _weekOffset: number) => {};

// function addDays(date: Date, days: number) {
//   return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
// }

// function addMonths(date: Date, months: number) {
//   return new Date(date.getFullYear(), date.getMonth() + months, date.getDate());
// }

// function getCurrentMonthStartDate() {
//   const today = new Date();
//   return new Date(today.getFullYear(), today.getMonth(), 1);
// }

// // wrong !!!!
// export const getOffsetMonth = (offset: number) =>
//   addMonths(getCurrentMonthStartDate(), offset).getMonth();

// export const getOffsetYear = (offset: number) =>
//   addMonths(getCurrentMonthStartDate(), offset).getFullYear();

export function calculateMonthCalendar(monthDate: Date) {
  // const startMonthWeekday = monthDate.getDay();
  // const startDate = addDays(monthDate, -startMonthWeekday);

  const startDate = calculateStartDate(monthDate);
  return createDateList(startDate, DAYS_IN_WEEK * WEEKS_IN_CALENDAR);
}

export function calculateWeekCalendar(monthDate: Date, weekDate: Date | null) {
  if (weekDate) return createDateList(weekDate, DAYS_IN_WEEK);

  // const startMonthWeekday = monthDate.getDay();
  // const startDate = addDays(monthDate, -startMonthWeekday);
  const startDate = calculateStartDate(monthDate);
  return createDateList(startDate, DAYS_IN_WEEK);
}

export function reCalculateMonthDate(weekDate: Date) {
  const weekList = createDateList(weekDate, DAYS_IN_WEEK);

  const firstMonthDayDate = weekList.find(date => date.getDate() === 1);

  return firstMonthDayDate || new Date(weekList[0].getFullYear(), weekList[0].getMonth(), 1);
}

export function calculateStartDate(date: Date) {
  const startMonthWeekday = date.getDay();
  return addDays(date, -startMonthWeekday);
}

function createDateList(startDate: Date, daysNum: number) {
  return Array.from(Array(daysNum)).map((_, i, arr) => (arr[i] = addDays(startDate, i)));
}
