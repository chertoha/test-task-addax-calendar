import { useState } from "react";
import { calculateCalendar } from "../../helpers/calculateCalendar";
import styled from "styled-components";
import Day from "../Day";

export const Wrapper = styled("div")`
  height: 100vh;
  /* outline: 5px solid red; */
`;

export const List = styled("ul")`
  display: grid;

  height: 100%;

  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);

  gap: 5px;
`;

export const Item = styled("li")`
  outline: 1px solid green;
`;

const Calendar = () => {
  const [offset, setOffset] = useState<number>(0);

  const calendar = calculateCalendar(offset);

  console.log(calendar);

  return (
    <>
      <Wrapper>
        <List>
          {calendar.map(date => (
            <Item key={date.toString()}>
              <Day date={date} />
            </Item>
          ))}
        </List>
      </Wrapper>
    </>
  );
};

export default Calendar;
