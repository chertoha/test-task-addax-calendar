import { DragEvent, FC, useState } from "react";

import { useTrashContext } from "@/hooks/useTrashContext";
import { TaskType } from "@/types/entities";
import { EmptyItem } from "./Slot.styled";

interface Iprops {
  index: number;
  movingTaskHandler: (index: number, task: TaskType) => void;
}

const Slot: FC<Iprops> = ({ index, movingTaskHandler }) => {
  const [isSlotHovered, setIsSlotHovered] = useState<boolean>(false);
  const { closeTrash } = useTrashContext();

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
    closeTrash();
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
