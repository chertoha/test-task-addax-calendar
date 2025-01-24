import { FC } from "react";

import { useHolidaysContext } from "@/hooks/useHolidaysContext";
import { HolidayText } from "./Day.styled";
import { areDatesEqual } from "@/utils/date";

interface IProps {
  date: Date;
}

const Holiday: FC<IProps> = ({ date }) => {
  const { holidays } = useHolidaysContext();

  const holiday = holidays.find(({ date: holidayDate }) =>
    areDatesEqual(new Date(date), new Date(holidayDate))
  );

  return holiday && <HolidayText>{holiday.name}</HolidayText>;
};

export default Holiday;
