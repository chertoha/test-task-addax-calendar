import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TaskList from "../TaskList";

import { TaskType } from "@/types/entities";
import AddTaskButton from "../AddTaskButton";
import { useHolidaysContext } from "@/hooks/useHolidaysContext";
import { areDatesEqual, isLastDayOfMonth, MONTHS } from "@/utils/date";

export const Wrapper = styled("div")<{ $current: boolean }>`
  padding: 10px;
  display: flex;
  flex-direction: column;

  background-color: ${p => (p.$current ? "#ced3d5" : "#ebebeb")};
  height: 100%;

  &:hover button {
    display: block;
  }
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
  month: number;
}

const Day: FC<IProps> = ({ date, tasks, month }) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [newTaskId, setNewTaskId] = useState<string | number | null>(null);
  const { holidays } = useHolidaysContext();

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

  const lastTaskOrder: number = tasks.length > 0 ? tasks[tasks.length - 1].order : 0;

  const holiday = holidays.find(({ date: holidayDate }) =>
    areDatesEqual(new Date(date), new Date(holidayDate))
  );

  console.log(date);

  const shouldShowMonthName = isLastDayOfMonth(date) || date.getDate() === 1;

  return (
    <Wrapper $current={month === date.getMonth()}>
      <Toolbar>
        <span>
          {shouldShowMonthName && MONTHS[date.getMonth()].short} {date.getDate()}
        </span>

        <AddTaskButton
          date={date}
          lastOrderValue={lastTaskOrder}
          showNewTask={showNewTask}
        />
      </Toolbar>

      <TaskListContainer ref={listRef}>
        {holiday && <p>{holiday.name}</p>}
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
