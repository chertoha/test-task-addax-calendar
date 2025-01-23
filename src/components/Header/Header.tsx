import useOffset from "@/hooks/useOffset";
import { getOffsetMonth, getOffsetYear } from "@/helpers/calculateCalendar";
import styled from "styled-components";
import { MONTHS } from "@/utils/date";
import useCalendar from "@/hooks/useCalendar";

export const Wrapper = styled("header")`
  padding: 0 100px;
  width: 100%;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Header = () => {
  // const { offset, decreaseOffset, increaseOffset } = useOffset();
  const { isMonthMode, nextWeek, prevWeek, toMonthMode, toWeekMode, nextMonth, prevMonth } =
    useCalendar();

  return (
    <Wrapper>
      <Buttons>
        <button onClick={isMonthMode ? prevMonth : prevWeek}>{"<"}</button>

        <button onClick={isMonthMode ? nextMonth : nextWeek}>{">"}</button>
      </Buttons>

      {/* <p>{new Date(2025, getOffsetMonth(offset), 1).toDateString()}</p> */}
      <p>
        {/* {MONTHS[getOffsetMonth(offset)].name} {getOffsetYear(offset)} */}
        DATE
      </p>

      <Buttons>
        <button onClick={toWeekMode}>Week</button>

        <button onClick={toMonthMode}>Month</button>
      </Buttons>
    </Wrapper>
  );
};

export default Header;
