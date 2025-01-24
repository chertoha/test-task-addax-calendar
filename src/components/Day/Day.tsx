import { FC, useEffect, useRef, useState } from "react";

import TaskList from "../TaskList";
import Toolbar from "./Toolbar";
import Holiday from "./Holiday";

import { TaskType } from "@/types/entities";
import { areDatesEqual } from "@/utils/date";
import { TaskListContainer, Wrapper } from "./Day.styled";

interface IProps {
  date: Date;
  tasks: TaskType[];
  isCurrentMonth: boolean;
}

const Day: FC<IProps> = ({ date, tasks, isCurrentMonth }) => {
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

  const lastTaskOrder: number = tasks.length > 0 ? tasks[tasks.length - 1].order : 0;
  const cardsNum = tasks.length;

  return (
    <Wrapper
      $current={isCurrentMonth}
      $today={areDatesEqual(new Date(), new Date(date))}
    >
      <Toolbar
        date={date}
        cardsNum={cardsNum}
        lastTaskOrder={lastTaskOrder}
        showNewTask={showNewTask}
      />

      <TaskListContainer ref={listRef}>
        <Holiday date={date} />

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
