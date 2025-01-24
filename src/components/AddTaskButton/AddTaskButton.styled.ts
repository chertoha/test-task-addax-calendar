import styled from "styled-components";

export const ButtonWrapper = styled("div")`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled("button")`
  opacity: 0;
  transform: translate(0, -30px);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  border-radius: 50%;
  border: 2px solid #0f7d0d;

  color: #0f7d0d;

  & > svg {
    height: 100%;
    width: 100%;
  }

  transition: transform 400ms ease-in-out, opacity 300ms ease-in-out;
`;
