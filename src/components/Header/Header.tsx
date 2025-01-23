import styled from "styled-components";
import { addDays, dateToShortDayMonthString, MONTHS } from "@/utils/date";
import useCalendar from "@/hooks/useCalendar";
import { calculateStartDate, DAYS_IN_WEEK } from "@/helpers/calculateCalendar";

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
  const {
    isMonthMode,
    nextWeek,
    prevWeek,
    toMonthMode,
    toWeekMode,
    nextMonth,
    prevMonth,
    monthDate,
    weekDate,
  } = useCalendar();

  const from = weekDate ? weekDate : calculateStartDate(monthDate);
  const to = addDays(from, DAYS_IN_WEEK - 1);
  return (
    <Wrapper>
      <Buttons>
        <button onClick={isMonthMode ? prevMonth : prevWeek}>{"<"}</button>

        <button onClick={isMonthMode ? nextMonth : nextWeek}>{">"}</button>
      </Buttons>

      {isMonthMode ? (
        <p>
          {MONTHS[monthDate.getMonth()].name} {monthDate.getFullYear()}
        </p>
      ) : (
        <p>
          {dateToShortDayMonthString(from)} - {dateToShortDayMonthString(to)}
        </p>
      )}

      <Buttons>
        <button onClick={toWeekMode}>Week</button>

        <button onClick={toMonthMode}>Month</button>
      </Buttons>
    </Wrapper>
  );
};

export default Header;
