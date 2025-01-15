import styled from "styled-components";

export const Wrapper = styled("label")`
  display: block;
  padding: 5px 10px;
  background-color: #ffffff;
  border-radius: 4px;

  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);

  cursor: pointer;
`;

const Task = () => {
  return <Wrapper>How to Structure Additional Calendar</Wrapper>;
};

export default Task;
