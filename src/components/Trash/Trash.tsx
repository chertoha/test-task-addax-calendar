import styled from "styled-components";
import { useTrashContext } from "@/hooks/useTrashContext";
import { DragEvent, useState } from "react";
import { TaskType } from "@/types/entities";
import { useDispatch } from "react-redux";
import { removeTask } from "@/redux/tasks/slice";
import { FaTrash } from "react-icons/fa6";

const Wrapper = styled("div")<{ $hovered: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 400ms ease-in-out;
  transform: ${p => (p.$hovered ? "scale(1.4)" : "scale(1)")};
  color: #b01212;

  width: 50px;
  height: 50px;
  background-color: rgba(177, 24, 24, 0.329);
  border-radius: 50%;
  opacity: 0.5;
`;

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
