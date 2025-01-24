import styled, { css } from "styled-components";

export const EmptyItem = styled("li")<{ $hovered: boolean }>`
  min-height: 10px;
  flex-shrink: 0;

  ${p =>
    p.$hovered &&
    css`
      min-height: 25px;
      background-color: rgba(255, 255, 255, 0.138);
      border-radius: 5px;
    `}

  transition: min-height 0.3s ease;

  &:last-child {
    flex-grow: 1;
    min-height: 30px;
    border-radius: 20px;
  }
`;
