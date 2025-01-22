export const calculateMonthCalendar = (offset: number) => {
  // const today = new Date();
  // const date = addMonths(today, offset);

  // const startMonthDate = new Date(date.getFullYear(), date.getMonth(), 1);
  // const startMonthWeekday = startMonthDate.getDay();

  // const startDate = addDays(startMonthDate, -startMonthWeekday);
  // return Array.from(Array(42)).map((_, i, arr) => (arr[i] = addDays(startDate, i)));

  const today = new Date();
  const startTodayMonthDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const date = addMonths(startTodayMonthDate, offset);

  const startMonthDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const startMonthWeekday = startMonthDate.getDay();

  const startDate = addDays(startMonthDate, -startMonthWeekday);
  return Array.from(Array(42)).map((_, i, arr) => (arr[i] = addDays(startDate, i)));
};

// export const calculateWeekCalendar = (monthOffset: number, weekOffset: number) => {
//   const today = new Date(2024, 2, 31);

//   console.log(new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()));

//   // const date = addMonths(today, offset);
//   // const startMonthDate = new Date(date.getFullYear(), date.getMonth(), 1);
//   // const startMonthWeekday = startMonthDate.getDay();
//   // const startDate = addDays(startMonthDate, -startMonthWeekday);
//   // return Array.from(Array(42)).map((_, i, arr) => (arr[i] = addDays(startDate, i)));
// };

function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

function addMonths(date: Date, months: number) {
  return new Date(date.getFullYear(), date.getMonth() + months, date.getDate());
}

export const getOffsetMonth = (offset: number) => addMonths(new Date(), offset).getMonth();
export const getOffsetYear = (offset: number) => addMonths(new Date(), offset).getFullYear();
