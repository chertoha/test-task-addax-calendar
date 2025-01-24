import styled, { css } from "styled-components";

export const Wrapper = styled("div")<{ $hovered: boolean; $next: boolean }>`
  height: 30px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: rgba(92, 131, 155, 0.208);

  background-color: ${p =>
    p.$hovered ? "rgba(67, 145, 194, 0.458)" : "rgba(89, 182, 239, 0.348)"};
  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.3);

  transition: background-color 250ms ease-in-out;

  & > svg {
    ${p =>
      p.$next
        ? css`
            padding-bottom: 2px;
          `
        : css`
            padding-top: 2px;
          `}
  }
`;
