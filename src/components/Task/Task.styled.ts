import styled from "styled-components";

export const Card = styled("label")`
  padding: 7px 10px;
  min-height: 24px;
  display: block;

  font-size: 12px;
  letter-spacing: 0.03em;
  color: #232628;
  word-wrap: break-word;

  background-color: #f5f8f9;
  border-radius: 4px;
  border-top: 4px solid #31708d;

  -webkit-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.75);

  cursor: grab;
`;

export const Area = styled("textarea")`
  display: block;
  width: 100%;
  outline: none;
  border: none;
  background-color: #f5f8f9;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
