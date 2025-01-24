import { DragEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa6";

import { useTrashContext } from "@/hooks/useTrashContext";
import { TaskType } from "@/types/entities";
import { removeTask } from "@/redux/tasks/slice";
import { Wrapper } from "./Trash.styled";

const Trash = () => {
  const { isTrashVisible, closeTrash } = useTrashContext();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsHovered(true);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsHovered(false);
    const task: TaskType = JSON.parse(event.dataTransfer.getData("application/json"));

    dispatch(removeTask(task.id));
    closeTrash();
  };

  const handleDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsHovered(false);
  };

  return (
    isTrashVisible && (
      <Wrapper
        $hovered={isHovered}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <FaTrash size={30} />
      </Wrapper>
    )
  );
};

export default Trash;
