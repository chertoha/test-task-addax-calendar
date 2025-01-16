import { FC } from "react";
import styled from "styled-components";
import TaskList from "../TaskList";

import { TaskType } from "@/types/entities";

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

interface IProps {
  date: Date;
  tasks: TaskType[];
}

const Day: FC<IProps> = ({ date, tasks }) => {
  return (
    <Wrapper>
      <div style={{ marginBottom: "5px" }}>{date.getDate()}</div>
      <TaskListContainer>
        <TaskList list={tasks} date={date} />
      </TaskListContainer>
    </Wrapper>
  );
};

export default Day;
