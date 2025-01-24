import styled from "styled-components";

export const List = styled("ul")`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  background-color: #c5c0b2;
  gap: 5px;

  font-size: 16px;
  color: #373737;
  font-weight: 700;
`;

export const Item = styled("li")`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
