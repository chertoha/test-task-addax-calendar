import styled from "styled-components";

export const Wrapper = styled("div")<{ $hovered: boolean }>`
  position: fixed;
  bottom: 50px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: transform 400ms ease-in-out;
  transform: ${p => (p.$hovered ? "scale(1.4)" : "scale(1)")};
  color: #b01212;

  width: 50px;
  height: 50px;
  background-color: rgba(177, 24, 24, 0.329);
  border-radius: 50%;
  opacity: 0.5;
`;
