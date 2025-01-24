import styled, { css } from "styled-components";

export const Wrapper = styled("div")`
  height: 100%;
  background-color: #ebeeed;
`;

export const ListWrapper = styled("ul")<{ $monthmode: boolean }>`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, minmax(0, 1fr));

  ${p =>
    p.$monthmode &&
    css`
      grid-template-rows: repeat(6, minmax(0, 1fr));
    `}

  gap: 5px;
`;

export const Item = styled("li")``;
