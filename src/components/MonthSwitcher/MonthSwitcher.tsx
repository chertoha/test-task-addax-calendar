import useCalendar from "@/hooks/useCalendar";
import { DragEvent, FC, useState } from "react";
import styled from "styled-components";

export const Wrapper = styled("div")<{ $hovered: boolean }>`
  height: 30px;
  flex-shrink: 0;

  background-color: ${p => (p.$hovered ? "rgba(89, 181, 239, 0.45)" : "rgba(89, 182, 239, 0.348)")};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);

  transition: background-color 250ms ease-in-out;
`;

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
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    ></Wrapper>
  );
};

export default MonthSwitcher;
