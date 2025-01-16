import styled from "styled-components";
import Task from "../Task/Task";
import { TaskType } from "../../types/entities";
import { DragEvent, FC } from "react";
import { updateTaskDate } from "@/redux/tasks/slice";
import { useDispatch } from "react-redux";

export const List = styled("ul")`
  flex-grow: 1;
`;

export const Item = styled("li")`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface IProps {
  list: TaskType[];
  date: Date;
}

const TaskList: FC<IProps> = ({ list, date }) => {
  const dispatch = useDispatch();

  const handleDragOver = (event: DragEvent<HTMLUListElement>) => {
    event.preventDefault(); // Это позволяет сбросить элемент
  };

  const handleDrop = (event: DragEvent<HTMLUListElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    dispatch(updateTaskDate({ id, date: date.toISOString() }));
  };

  return (
    <List onDrop={handleDrop} onDragOver={handleDragOver}>
      {list.map(data => (
        <Item key={data.id}>
          <Task data={data} />
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
