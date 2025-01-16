import { DragEvent, FC } from "react";
import styled from "styled-components";
import { TaskType } from "../../types/entities";

export const Card = styled("label")`
  display: block;
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 4px;

  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);

  cursor: grab;
`;

interface IProps {
  data: TaskType;
}

const Task: FC<IProps> = ({ data }) => {
  const { value } = data;

  const handleDragStart = (event: DragEvent<HTMLLabelElement>) => {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("application/json", JSON.stringify({ ...data }));
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  return (
    <Card draggable onDragStart={handleDragStart} onDragOver={handleDragOver}>
      {value}
    </Card>
  );
};

export default Task;
