import styled from "styled-components";
import { addDays, dateToShortDayMonthString, MONTHS } from "@/utils/date";
import useCalendar from "@/hooks/useCalendar";
import { calculateStartDate, DAYS_IN_WEEK } from "@/helpers/calculateCalendar";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch } from "@/redux/tasks/selectors";
import { updateSearch } from "@/redux/tasks/slice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export const Wrapper = styled("header")`
  padding: 30px 100px;
  width: 100%;
  /* height: 70px; */
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #b0d9f2;
`;

export const Buttons = styled("div")`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const EndToolsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const TitleDate = styled("p")`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
`;

export const Button = styled("button")`
  padding: 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #6b8692;

  border: 1px solid #3b6577;
  border-radius: 4px;

  transition: background-color 300ms ease-in-out, color 300ms ease-in-out,
    border-color 300ms ease-in-out;
  &:hover {
    background-color: #6c99ae;
    border-color: #6c99ae;
    color: #f4f2f2;
  }
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

  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const from = weekDate ? weekDate : calculateStartDate(monthDate);
  const to = addDays(from, DAYS_IN_WEEK - 1);
  return (
    <Wrapper>
      <Buttons>
        <Button onClick={isMonthMode ? prevMonth : prevWeek}>
          <FaChevronUp />
        </Button>

        <Button onClick={isMonthMode ? nextMonth : nextWeek}>
          <FaChevronDown />
        </Button>
      </Buttons>

      {isMonthMode ? (
        <TitleDate>
          {MONTHS[monthDate.getMonth()].name} {monthDate.getFullYear()}
        </TitleDate>
      ) : (
        <TitleDate>
          {dateToShortDayMonthString(from)} - {dateToShortDayMonthString(to)}
        </TitleDate>
      )}

      <EndToolsWrapper>
        <input
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={e => dispatch(updateSearch(e.target.value))}
        />

        <Buttons>
          <button onClick={toWeekMode}>Week</button>

          <button onClick={toMonthMode}>Month</button>
        </Buttons>
      </EndToolsWrapper>
    </Wrapper>
  );
};

export default Header;
