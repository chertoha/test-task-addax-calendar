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

  cursor: pointer;
`;

interface IProps {
  data: TaskType;
}

const Task: FC<IProps> = ({ data: { value, id } }) => {
  const handleDragStart = (event: DragEvent<HTMLLabelElement>) => {
    event.dataTransfer.setData("text/plain", id.toString());
  };

  return (
    <Card draggable onDragStart={handleDragStart}>
      {value}
    </Card>
  );
};

export default Task;
