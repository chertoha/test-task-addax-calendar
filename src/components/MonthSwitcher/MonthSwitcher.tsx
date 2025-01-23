import useCalendar from "@/hooks/useCalendar";
import { DragEvent, FC, useState } from "react";
import styled, { css } from "styled-components";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

export const Wrapper = styled("div")<{ $hovered: boolean; $next: boolean }>`
  height: 30px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(92, 131, 155, 0.208);

  background-color: ${p =>
    p.$hovered ? "rgba(67, 145, 194, 0.458)" : "rgba(89, 182, 239, 0.348)"};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);

  transition: background-color 250ms ease-in-out;

  & > svg {
    ${p =>
      p.$next
        ? css`
            padding-bottom: 2px;
          `
        : css`
            padding-top: 2px;
          `}
  }
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
      $next={next}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {next ? <FaChevronDown size={18} /> : <FaChevronUp size={18} />}
    </Wrapper>
  );
};

export default MonthSwitcher;
