import styled from "styled-components";

export const Wrapper = styled("div")<{ $current: boolean; $today: boolean }>`
  padding: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background-color: ${p => (p.$current ? "#87b0c1" : "#c6ccaa")};
  border-radius: 6px;

  border-width: 3px;
  border-color: #1c5165;
  border-style: ${p => p.$today && "solid"};

  &:hover button {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

export const TaskListContainer = styled("div")`
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ToolbarContainer = styled("div")`
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HolidayText = styled("p")`
  font-size: 12px;
  color: #3c5a67;
`;

export const DateTextWrapper = styled("span")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const DateText = styled("span")`
  font-size: 15px;
  font-weight: 700;
  color: #2d2b2b;
`;

export const ToolbarCardsText = styled("span")`
  font-size: 12px;
  font-weight: 700;
  color: #647c7c;
`;
