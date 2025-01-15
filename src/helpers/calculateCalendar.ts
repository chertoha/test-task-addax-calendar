export const calculateCalendar = (offset: number) => {
  const today = new Date();
  const date = addMonths(today, offset);

  const startMonthDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const startMonthWeekday = startMonthDate.getDay();

  const startDate = addDays(startMonthDate, -startMonthWeekday);
  return Array.from(Array(42)).map((_, i, arr) => (arr[i] = addDays(startDate, i)));
};

function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function addMonths(date: Date, months: number) {
  return new Date(date.getFullYear(), date.getMonth() + months, date.getDate());
}
