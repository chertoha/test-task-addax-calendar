import { addDays } from "@/utils/date";

export const DAYS_IN_WEEK = 7;
export const WEEKS_IN_CALENDAR = 6;

export function calculateMonthCalendar(monthDate: Date) {
  const startDate = calculateStartDate(monthDate);
  return createDateList(startDate, DAYS_IN_WEEK * WEEKS_IN_CALENDAR);
}

export function calculateWeekCalendar(monthDate: Date, weekDate: Date | null) {
  if (weekDate) return createDateList(weekDate, DAYS_IN_WEEK);

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

export function getStartTodayMonthDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), 1);
}
