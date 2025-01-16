import { TaskType } from "@/types/entities";
import { DragEvent, FC, useState } from "react";
import styled, { css } from "styled-components";

export const EmptyItem = styled("li")<{ $hovered: boolean }>`
  min-height: 10px;
  flex-shrink: 0;

  ${p =>
    p.$hovered &&
    css`
      min-height: 25px;
      background-color: rgba(192, 208, 224, 0.3);
      border-radius: 5px;
    `}

  transition: min-height 0.3s ease;

  &:last-child {
    height: 100%;
    min-height: 30px;

    border-radius: 20px;
  }
`;

interface Iprops {
  index: number;
  movingTaskHandler: (index: number, task: TaskType) => void;
}

const Slot: FC<Iprops> = ({ index, movingTaskHandler }) => {
  const [isSlotHovered, setIsSlotHovered] = useState<boolean>(false);

  const handleDragOver = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    setIsSlotHovered(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    setIsSlotHovered(false);
  };

  const handleDrop = (event: DragEvent<HTMLLIElement>) => {
    event.preventDefault();
    setIsSlotHovered(false);

    let incomingTask: TaskType;

    try {
      incomingTask = JSON.parse(event.dataTransfer.getData("application/json"));
    } catch (error) {
      console.log(error);
      return;
    }

    movingTaskHandler(index, incomingTask);
  };

  return (
    <EmptyItem
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      $hovered={isSlotHovered}
    ></EmptyItem>
  );
};

export default Slot;
