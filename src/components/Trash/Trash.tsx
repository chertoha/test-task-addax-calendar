import styled from "styled-components";
import { useTrashContext } from "@/hooks/useTrashContext";
import { DragEvent } from "react";
import { TaskType } from "@/types/entities";
import { useDispatch } from "react-redux";
import { removeTask } from "@/redux/tasks/slice";

const Wrapper = styled("div")`
  position: fixed;
  bottom: 50px;
  right: 30px;

  width: 50px;
  height: 50px;
  background-color: gray;
  opacity: 0.7;
`;

const Trash = () => {
  const { isTrashVisible, closeTrash } = useTrashContext();
  const dispatch = useDispatch();

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const task: TaskType = JSON.parse(event.dataTransfer.getData("application/json"));

    dispatch(removeTask(task.id));
    closeTrash();
  };

  return (
    isTrashVisible && (
      <Wrapper
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      ></Wrapper>
    )
  );
};

export default Trash;
