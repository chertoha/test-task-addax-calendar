import styled, { css } from "styled-components";
import { useSelector } from "react-redux";

import Day from "../Day";
import useCalendar from "@/hooks/useCalendar";

import { calculateMonthCalendar, calculateWeekCalendar } from "../../helpers/calculateCalendar";
import { selectTasksByDates } from "@/redux/tasks/selectors";
import { areDatesEqual } from "@/utils/date";
import { RootState } from "@/redux/store";

export const Wrapper = styled("div")`
  height: 100%;
`;

export const ListWrapper = styled("ul")<{ $monthmode: boolean }>`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, minmax(0, 1fr));

  ${p =>
    p.$monthmode &&
    css`
      grid-template-rows: repeat(6, minmax(0, 1fr));
    `}

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
