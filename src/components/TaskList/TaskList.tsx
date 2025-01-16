import styled from "styled-components";
import Task from "../Task/Task";
import { TaskType } from "../../types/entities";
import { DragEvent, FC } from "react";
import { updateTaskDate } from "@/redux/tasks/slice";
import { useDispatch } from "react-redux";
import Slot from "../Slot";
import { nanoid } from "@reduxjs/toolkit";

export const List = styled("ul")`
  flex-grow: 1;
`;

interface IProps {
  list: TaskType[];
  date: Date;
}

const TaskList: FC<IProps> = ({ list, date }) => {
  const dispatch = useDispatch();

  const handleListDragOver = (event: DragEvent<HTMLUListElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLUListElement>) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    dispatch(updateTaskDate({ id, date: date.toISOString() }));
  };

  const renderList = Array.from({ length: list.length * 2 + 1 }, (_, i) =>
    i !== 0 && i % 2 !== 0 ? list[Math.trunc(i / 2)] : undefined
  );

  //   console.log(renderList);

  return (
    <List onDrop={handleDrop} onDragOver={handleListDragOver}>
      {renderList.map((data, index) =>
        !data ? (
          <Slot index={index} key={nanoid(4)} />
        ) : (
          <li key={data.id}>
            <Task data={data} />
          </li>
        )
      )}
    </List>
  );
};

export default TaskList;
