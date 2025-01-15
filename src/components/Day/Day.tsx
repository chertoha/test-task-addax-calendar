import { FC } from "react";
import styled from "styled-components";
import TaskList from "../TaskList";

export const Wrapper = styled("div")`
  padding: 10px;
  display: flex;
  flex-direction: column;

  background-color: #e3e5e6;
  height: 100%;
`;

interface IProps {
  date: Date;
}

const Day: FC<IProps> = ({ date }) => {
  return (
    <Wrapper>
      <div style={{ marginBottom: "5px" }}>{date.getDate()}</div>
      <TaskList />
    </Wrapper>
  );
};

export default Day;
