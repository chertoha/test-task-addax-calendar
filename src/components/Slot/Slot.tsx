import { TaskType } from "@/types/entities";
import { DragEvent, FC, useState } from "react";
import styled from "styled-components";

export const EmptyItem = styled("li")<{ $hovered: boolean }>`
  min-height: ${p => (p.$hovered ? "20px" : "7px")};
  /* outline: 2px solid red; */

  &:last-child {
    /* flex-grow: 1; */
    height: 100%;
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

    console.log("slot index ->", index);

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
