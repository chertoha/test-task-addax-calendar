import useCalendar from "@/hooks/useCalendar";

import { TitleDate } from "./Header.styled";
import { addDays, dateToShortDayMonthString, MONTHS } from "@/utils/date";
import { calculateStartDate, DAYS_IN_WEEK } from "@/helpers/calculateCalendar";

const Title = () => {
  const { isMonthMode, monthDate, weekDate } = useCalendar();

  const from = weekDate ? weekDate : calculateStartDate(monthDate);
  const to = addDays(from, DAYS_IN_WEEK - 1);

  return isMonthMode ? (
    <TitleDate>
      {MONTHS[monthDate.getMonth()].name} {monthDate.getFullYear()}
    </TitleDate>
  ) : (
    <TitleDate>
      {dateToShortDayMonthString(from)} - {dateToShortDayMonthString(to)}
    </TitleDate>
  );
};

export default Title;
