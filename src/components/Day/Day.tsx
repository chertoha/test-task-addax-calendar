import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TaskList from "../TaskList";

import { TaskType } from "@/types/entities";
import AddTaskButton from "../AddTaskButton";

export const Wrapper = styled("div")`
  padding: 10px;
  display: flex;
  flex-direction: column;

  background-color: #e3e5e6;
  height: 100%;
`;

export const TaskListContainer = styled("div")`
  height: 100%;
  overflow: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Toolbar = styled("div")`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface IProps {
  date: Date;
  tasks: TaskType[];
}

const Day: FC<IProps> = ({ date, tasks }) => {
  const lastTaskOrder: number = tasks.length > 0 ? tasks[tasks.length - 1].order : 0;

  const listRef = useRef<HTMLDivElement>(null);
  const [newTaskId, setNewTaskId] = useState<string | number | null>(null);

  useEffect(() => {
    if (listRef.current && newTaskId) {
      listRef.current.scrollTo({
        top: listRef.current.scrollHeight,
        behavior: "smooth",
      });
      setNewTaskId(null);
    }
  }, [tasks, newTaskId]);

  const showNewTask = (id: number | string) => {
    setNewTaskId(id);
  };

  return (
    <Wrapper>
      <Toolbar>
        <span>{date.getDate()}</span>

        <AddTaskButton
          date={date}
          lastOrderValue={lastTaskOrder}
          showNewTask={showNewTask}
        />
      </Toolbar>

      <TaskListContainer ref={listRef}>
        <TaskList
          list={tasks}
          date={date}
          newTaskId={newTaskId}
        />
      </TaskListContainer>
    </Wrapper>
  );
};

export default Day;
