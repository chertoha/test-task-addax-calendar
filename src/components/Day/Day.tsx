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

interface IProps {
  date: Date;
  tasks: TaskType[];
}

const Day: FC<IProps> = ({ date, tasks }) => {
  return (
    <Wrapper>
      <div style={{ marginBottom: "5px" }}>{date.getDate()}</div>
      <div style={{ overflow: "auto" }}>
        <TaskList list={tasks} date={date} />
      </div>
    </Wrapper>
  );
};

export default Day;
