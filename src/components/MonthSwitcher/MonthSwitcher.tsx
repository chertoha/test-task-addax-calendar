import { DragEvent, FC, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import useCalendar from "@/hooks/useCalendar";
import { Wrapper } from "./MonthSwitcher.styled";

interface IProps {
  next?: boolean;
}

const MonthSwitcher: FC<IProps> = ({ next = false }) => {
  const { isMonthMode, nextMonth, nextWeek, prevWeek, prevMonth } = useCalendar();

  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovered(true);

    if (!isAvailable) return;

    setIsAvailable(false);

    const increaseHandler = isMonthMode ? nextMonth : nextWeek;
    const decreaseHandler = isMonthMode ? prevMonth : prevWeek;

    setTimeout(() => {
      if (next) {
        increaseHandler();
      } else {
        decreaseHandler();
      }

      setTimeout(() => {
        setIsAvailable(true);
      }, 1000);
    }, 1000);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovered(false);
  };

  return (
    <Wrapper
      $hovered={isHovered}
      $next={next}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {next ? <FaChevronDown size={18} /> : <FaChevronUp size={18} />}
    </Wrapper>
  );
};

export default MonthSwitcher;
