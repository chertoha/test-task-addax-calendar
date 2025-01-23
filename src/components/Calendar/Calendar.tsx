import { calculateMonthCalendar, calculateWeekCalendar } from "../../helpers/calculateCalendar";
import styled from "styled-components";
import Day from "../Day";
import { useSelector } from "react-redux";
import { selectTasks, selectTasksByDates } from "@/redux/tasks/selectors";
import { areDatesEqual } from "@/utils/date";
import useCalendar from "@/hooks/useCalendar";
import { RootState } from "@/redux/store";

export const Wrapper = styled("div")`
  height: 100%;
`;

export const MonthList = styled("ul")`
  display: grid;

  height: 100%;

  grid-template-columns: repeat(7, minmax(0, 1fr));
  grid-template-rows: repeat(6, minmax(0, 1fr));

  gap: 5px;
`;

export const WeekList = styled("ul")`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  gap: 5px;
`;

export const Item = styled("li")`
  /* outline: 1px solid green; */
`;

const Calendar = () => {
  const { monthDate, weekDate, isMonthMode } = useCalendar();

  const calendar = isMonthMode
    ? calculateMonthCalendar(monthDate)
    : calculateWeekCalendar(monthDate, weekDate);

  const tasks = useSelector((state: RootState) =>
    selectTasksByDates(state, calendar[0], calendar.length)
  );

  console.log(tasks);

  const findDayTasks = (dayDate: Date) =>
    tasks
      .filter(({ date }) => areDatesEqual(dayDate, new Date(date)))
      .sort((a, b) => a.order - b.order);

  return (
    <>
      <Wrapper>
        {isMonthMode ? (
          <MonthList>
            {calendar.map(date => (
              <Item key={date.toString()}>
                <Day
                  date={date}
                  tasks={findDayTasks(date)}
                  isCurrentMonth={monthDate.getMonth() === date.getMonth()}
                />
              </Item>
            ))}
          </MonthList>
        ) : (
          <WeekList>
            {calendar.map(date => (
              <Item key={date.toString()}>
                <Day
                  date={date}
                  tasks={findDayTasks(date)}
                  isCurrentMonth={monthDate.getMonth() === date.getMonth()}
                />
              </Item>
            ))}
          </WeekList>
        )}
      </Wrapper>
    </>
  );
};

export default Calendar;
