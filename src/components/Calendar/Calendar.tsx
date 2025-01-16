import { useState } from "react";
import { calculateCalendar } from "../../helpers/calculateCalendar";
import styled from "styled-components";
import Day from "../Day";
import { useSelector } from "react-redux";
import { selectTasks } from "@/redux/tasks/selectors";
import { areDatesEqual } from "@/utils/date";

export const Wrapper = styled("div")`
  height: 100%;
`;

export const List = styled("ul")`
  display: grid;

  height: 100%;

  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, minmax(0, 1fr));

  gap: 5px;
`;

export const Item = styled("li")`
  outline: 1px solid green;
`;

const Calendar = () => {
  const [offset, _setOffset] = useState<number>(0);
  const tasks = useSelector(selectTasks);

  const calendar = calculateCalendar(offset);

  const findDayTasks = (dayDate: Date) =>
    tasks
      .filter(({ date }) => areDatesEqual(dayDate, new Date(date)))
      .sort((a, b) => a.order - b.order);

  // console.log(tasks);

  return (
    <>
      <Wrapper>
        <List>
          {calendar.map(date => (
            <Item key={date.toString()}>
              <Day date={date} tasks={findDayTasks(date)} />
            </Item>
          ))}
        </List>
      </Wrapper>
    </>
  );
};

export default Calendar;
