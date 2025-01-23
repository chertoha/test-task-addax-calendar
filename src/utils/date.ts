export const areDatesEqual = (date1: Date, date2: Date): boolean =>
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

export const MONTHS = [
  { name: "January", short: "Jan" },
  { name: "February", short: "Feb" },
  { name: "March", short: "Mar" },
  { name: "April", short: "Apr" },
  { name: "May", short: "May" },
  { name: "June", short: "Jun" },
  { name: "July", short: "Jul" },
  { name: "August", short: "Aug" },
  { name: "September", short: "Sep" },
  { name: "October", short: "Oct" },
  { name: "November", short: "Nov" },
  { name: "December", short: "Dec" },
];

export const isLastDayOfMonth = (date: Date): boolean => {
  const nextMonthFirstDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const lastDayOfMonth = new Date(nextMonthFirstDay.getTime() - 1);
  return date.getDate() === lastDayOfMonth.getDate();
};

export const DAYS = [
  { name: "Sunday", short: "Sun" },
  { name: "Monday", short: "Mon" },
  { name: "Tuesday", short: "Tue" },
  { name: "Wednesday", short: "Wed" },
  { name: "Thursday", short: "Thu" },
  { name: "Friday", short: "Fri" },
  { name: "Saturday", short: "Sat" },
];

export function addDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);
}

export function addMonths(date: Date, months: number) {
  return new Date(date.getFullYear(), date.getMonth() + months, date.getDate());
}

export function dateToShortDayMonthString(date: Date) {
  return `${date.getDate()} ${MONTHS[date.getMonth()].short}`;
}
