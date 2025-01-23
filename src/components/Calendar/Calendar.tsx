import { calculateMonthCalendar, calculateWeekCalendar } from "../../helpers/calculateCalendar";
import styled from "styled-components";
import Day from "../Day";
import { useSelector } from "react-redux";
import { selectTasks } from "@/redux/tasks/selectors";
import { areDatesEqual } from "@/utils/date";
import useCalendar from "@/hooks/useCalendar";

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
  const tasks = useSelector(selectTasks);

  // const offset = useSelector(selectOffset);
  const { monthDate, weekDate, isMonthMode } = useCalendar();

  let calendar: Date[];

  if (isMonthMode) {
    calendar = calculateMonthCalendar(monthDate);
  } else {
    calendar = calculateWeekCalendar(monthDate, weekDate);
  }

  const findDayTasks = (dayDate: Date) =>
    tasks
      .filter(({ date }) => areDatesEqual(dayDate, new Date(date)))
      .sort((a, b) => a.order - b.order);

  // const month = getOffsetMonth(offset);

  //Temporary!!!!!!
  // const month = monthDate;

  // calculateWeekCalendar(1, 1);

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
