import { DragEvent, FC } from "react";
import { nanoid } from "@reduxjs/toolkit";

import Task from "../Task/Task";
import Slot from "../Slot";
import shuffleTasks from "@/helpers/shuffleTasks";

import { TaskType } from "../../types/entities";
import { List } from "./TaskList.styled";

interface IProps {
  list: TaskType[];
  date: Date;
  newTaskId: number | string | null;
}

const TaskList: FC<IProps> = ({ list, date, newTaskId }) => {
  const handleListDragOver = (event: DragEvent<HTMLUListElement>) => {
    event.preventDefault();
  };

  const slotList = Array.from({ length: list.length * 2 + 1 }, (_, i) =>
    i !== 0 && i % 2 !== 0 ? list[Math.trunc(i / 2)] : undefined
  );

  const movingTaskHandler = (index: number, task: TaskType) => {
    shuffleTasks(slotList, index, task, date);
  };

  return (
    <List onDragOver={handleListDragOver}>
      {slotList.map((data, index) =>
        !data ? (
          <Slot
            index={index}
            key={nanoid(4)}
            movingTaskHandler={movingTaskHandler}
          />
        ) : (
          <li key={data.id}>
            <Task
              data={data}
              isNewTask={newTaskId === data.id}
            />
          </li>
        )
      )}
    </List>
  );
};

export default TaskList;
