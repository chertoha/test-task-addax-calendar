import { reCalculateMonthDate } from "@/helpers/calculateCalendar";
import { selectMonthDate, selectMonthMode, selectWeekDate } from "@/redux/calendar/selectors";
import {
  clearWeekDate,
  decreaseMonthDate,
  decreaseWeekDate,
  increaseMonthDate,
  increaseWeekDate,
  resetCalendarState,
  setMonthDate,
  setMonthMode,
  setWeekMode,
} from "@/redux/calendar/slice";
import { useDispatch, useSelector } from "react-redux";

const useCalendar = () => {
  const isMonthMode = useSelector(selectMonthMode);
  const monthDate = useSelector(selectMonthDate);
  const weekDate = useSelector(selectWeekDate);
  const dispatch = useDispatch();

  const toMonthMode = () => {
    if (isMonthMode) return;

    if (weekDate) {
      const newMonthDate = reCalculateMonthDate(new Date(weekDate));
      dispatch(setMonthDate(newMonthDate.toISOString()));
      dispatch(clearWeekDate());
    }

    dispatch(setMonthMode());
  };

  const toWeekMode = () => {
    if (!isMonthMode) return;
    dispatch(setWeekMode());
  };

  const prevMonth = () => {
    dispatch(decreaseMonthDate());
  };

  const nextMonth = () => {
    dispatch(increaseMonthDate());
  };

  const prevWeek = () => {
    dispatch(decreaseWeekDate());
  };

  const nextWeek = () => {
    dispatch(increaseWeekDate());
  };

  const resetCalendar = () => {
    dispatch(resetCalendarState());
  };

  return {
    monthDate: new Date(monthDate),
    weekDate: weekDate ? new Date(weekDate) : null,
    isMonthMode,
    toMonthMode,
    toWeekMode,
    prevMonth,
    nextMonth,
    prevWeek,
    nextWeek,
    resetCalendar,
  };
};

export default useCalendar;
