import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TaskList from "../TaskList";

import { TaskType } from "@/types/entities";
import AddTaskButton from "../AddTaskButton";
import { useHolidaysContext } from "@/hooks/useHolidaysContext";
import { areDatesEqual, isLastDayOfMonth, MONTHS } from "@/utils/date";

export const Wrapper = styled("div")<{ $current: boolean; $today: boolean }>`
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background-color: ${p => (p.$current ? "#87b0c1" : "#c6ccaa")};
  border-radius: 6px;

  border-width: 3px;
  border-color: #1c5165;
  border-style: ${p => p.$today && "solid"};

  &:hover button {
    /* display: flex; */
    opacity: 1;
    transform: translate(0, 0);
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

export const HolidayText = styled("p")`
  font-size: 12px;
  color: #3c5a67;
`;

export const DateTextWrapper = styled("span")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const DateText = styled("span")`
  font-size: 15px;
  font-weight: 700;
  color: #2d2b2b;
`;

export const ToolbarCardsText = styled("span")`
  font-size: 12px;
  font-weight: 700;
  color: #647c7c;
`;

interface IProps {
  date: Date;
  tasks: TaskType[];
  isCurrentMonth: boolean;
}

const Day: FC<IProps> = ({ date, tasks, isCurrentMonth }) => {
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

  const shouldShowMonthName = isLastDayOfMonth(date) || date.getDate() === 1;
  const cardsNum = tasks.length;

  return (
    <Wrapper
      $current={isCurrentMonth}
      $today={areDatesEqual(new Date(), new Date(date))}
    >
      <Toolbar>
        <DateTextWrapper>
          <DateText>
            {shouldShowMonthName && MONTHS[date.getMonth()].short} {date.getDate()}
          </DateText>

          {!!cardsNum && (
            <ToolbarCardsText>
              {cardsNum}
              {cardsNum === 1 ? " card" : " cards"}{" "}
            </ToolbarCardsText>
          )}
        </DateTextWrapper>

        <AddTaskButton
          date={date}
          lastOrderValue={lastTaskOrder}
          showNewTask={showNewTask}
        />
      </Toolbar>

      <TaskListContainer ref={listRef}>
        {holiday && <HolidayText>{holiday.name}</HolidayText>}
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
