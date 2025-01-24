import styled from "styled-components";

export const Button = styled("button")`
  padding: 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #3c4d54;

  border: 1px solid #3b6577;
  border-radius: 4px;

  transition: background-color 300ms ease-in-out, color 300ms ease-in-out,
    border-color 300ms ease-in-out;
  &:hover {
    background-color: #6c99ae;
    border-color: #6c99ae;
    color: #f4f2f2;
  }
`;
