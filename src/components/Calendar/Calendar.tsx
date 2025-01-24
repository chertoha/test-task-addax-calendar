import { useSelector } from "react-redux";

import Day from "../Day";
import useCalendar from "@/hooks/useCalendar";

import { RootState } from "@/redux/store";
import { calculateMonthCalendar, calculateWeekCalendar } from "../../helpers/calculateCalendar";
import { selectTasksByDates } from "@/redux/tasks/selectors";
import { areDatesEqual } from "@/utils/date";
import { Item, ListWrapper, Wrapper } from "./Calendar.styled";

const Calendar = () => {
  const { monthDate, weekDate, isMonthMode } = useCalendar();

  const calendar = isMonthMode
    ? calculateMonthCalendar(monthDate)
    : calculateWeekCalendar(monthDate, weekDate);

  const tasks = useSelector((state: RootState) =>
    selectTasksByDates(state, calendar[0], calendar.length)
  );

  const findDayTasks = (dayDate: Date) =>
    tasks
      .filter(({ date }) => areDatesEqual(dayDate, new Date(date)))
      .sort((a, b) => a.order - b.order);

  return (
    <>
      <Wrapper>
        <ListWrapper $monthmode={isMonthMode}>
          {calendar.map(date => (
            <Item key={date.toString()}>
              <Day
                date={date}
                tasks={findDayTasks(date)}
                isCurrentMonth={monthDate.getMonth() === date.getMonth()}
              />
            </Item>
          ))}
        </ListWrapper>
      </Wrapper>
    </>
  );
};

export default Calendar;
