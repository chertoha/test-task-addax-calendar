import styled from "styled-components";
import Task from "../Task/Task";

export const List = styled("ul")`
  flex-grow: 1;
`;

const TaskList = () => {
  return (
    <List>
      <li>
        <Task />
      </li>
    </List>
  );
};

export default TaskList;
