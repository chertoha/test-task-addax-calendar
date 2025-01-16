import styled from "styled-components";
import Task from "../Task/Task";
import { TaskType } from "../../types/entities";
import { DragEvent, FC } from "react";
import Slot from "../Slot";
import { nanoid } from "@reduxjs/toolkit";
import shuffleTasks from "@/helpers/shuffleTasks";

export const List = styled("ul")`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface IProps {
  list: TaskType[];
  date: Date;
}

const TaskList: FC<IProps> = ({ list, date }) => {
  const handleListDragOver = (event: DragEvent<HTMLUListElement>) => {
    event.preventDefault();
  };

  const slotList = Array.from({ length: list.length * 2 + 1 }, (_, i) =>
    i !== 0 && i % 2 !== 0 ? list[Math.trunc(i / 2)] : undefined
  );

  const movingTaskHandler = (index: number, task: TaskType) => {
    shuffleTasks(slotList, index, task, date);
  };

  // console.log(slotList);

  return (
    <List onDragOver={handleListDragOver}>
      {slotList.map((data, index) =>
        !data ? (
          <Slot index={index} key={nanoid(4)} movingTaskHandler={movingTaskHandler} />
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
