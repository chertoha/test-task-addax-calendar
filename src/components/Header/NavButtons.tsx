import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import useCalendar from "@/hooks/useCalendar";
import { Button } from "../UIKit/Button/Button.styled";
import { Buttons } from "./Header.styled";

const NavButtons = () => {
  const { isMonthMode, nextWeek, prevWeek, nextMonth, prevMonth } = useCalendar();

  return (
    <Buttons>
      <Button onClick={isMonthMode ? prevMonth : prevWeek}>
        <FaChevronUp />
      </Button>

      <Button onClick={isMonthMode ? nextMonth : nextWeek}>
        <FaChevronDown />
      </Button>
    </Buttons>
  );
};

export default NavButtons;
