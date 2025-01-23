import styled, { css } from "styled-components";
import { addDays, dateToShortDayMonthString, MONTHS } from "@/utils/date";
import useCalendar from "@/hooks/useCalendar";
import { calculateStartDate, DAYS_IN_WEEK } from "@/helpers/calculateCalendar";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch } from "@/redux/tasks/selectors";
import { updateSearch } from "@/redux/tasks/slice";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

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
  gap: 200px;
`;

export const TitleDate = styled("p")`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
  color: #343434;
`;

export const Button = styled("button")`
  padding: 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #3c4d54;

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

export const WeekMonthButton = styled(Button)<{ $active: boolean }>`
  padding-left: 10px;
  padding-right: 10px;
  color: #373535;
  font-weight: 700;

  ${p =>
    p.$active &&
    css`
      background-color: #6c99ae;
      border-color: #6c99ae;
      color: #f4f2f2;
    `}
`;

export const SearchWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #054867;
  /* gap: 5px; */
`;

export const SearchField = styled("input")`
  padding: 5px 5px;
  width: 200px;
  border-bottom: 1px solid #617c88;
  outline: none;

  &:focus-visible {
    border-color: #054867;
  }

  &:focus-visible::placeholder {
    color: #054867;
  }

  &::placeholder {
    color: #617c88;
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
        <SearchWrapper>
          <IoMdSearch size={18} />
          <SearchField
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={e => dispatch(updateSearch(e.target.value))}
          />
        </SearchWrapper>

        <Buttons>
          <WeekMonthButton
            $active={!isMonthMode}
            onClick={toWeekMode}
          >
            Week
          </WeekMonthButton>

          <WeekMonthButton
            $active={isMonthMode}
            onClick={toMonthMode}
          >
            Month
          </WeekMonthButton>
        </Buttons>
      </EndToolsWrapper>
    </Wrapper>
  );
};

export default Header;
