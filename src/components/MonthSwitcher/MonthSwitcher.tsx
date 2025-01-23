import useOffset from "@/hooks/useOffset";
import { DragEvent, FC, useState } from "react";
import styled from "styled-components";

export const Wrapper = styled("div")<{ $hovered: boolean }>`
  background-color: ${p => (p.$hovered ? "#edf3ed" : "#ffffff")};
  height: 30px;
  flex-shrink: 0;

  transition: background-color 250ms ease-in-out;
`;

interface IProps {
  next?: boolean;
}

const MonthSwitcher: FC<IProps> = ({ next = false }) => {
  const { decreaseOffset, increaseOffset } = useOffset();

  const [isAvailable, setIsAvailable] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsHovered(true);

    if (!isAvailable) return;

    setIsAvailable(false);
    setTimeout(() => {
      if (next) {
        increaseOffset();
      } else {
        decreaseOffset();
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
