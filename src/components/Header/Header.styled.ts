import styled, { css } from "styled-components";
import { Button } from "../UIKit/Button/Button.styled";

export const Wrapper = styled("header")`
  padding: 30px 100px;
  width: 100%;

  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #c5c0b2;
`;

export const Buttons = styled("div")`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StartToolsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

export const EndToolsWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 200px;
`;

export const TitleDate = styled("p")`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 700;
  color: #343434;
`;

export const SearchWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #054867;
`;

export const SearchField = styled("input")`
  padding: 5px 5px;
  width: 200px;
  border-bottom: 1px solid #617c88;
  outline: none;
  font-size: 16px;

  &:focus-visible {
    border-color: #054867;
  }

  &:focus-visible::placeholder {
    color: #054867;
  }

  &::placeholder {
    color: #617c88;
  }
`;

export const WeekMonthButton = styled(Button)<{ $active: boolean }>`
  padding-left: 10px;
  padding-right: 10px;
  color: #373535;
  font-weight: 700;

  ${p =>
    p.$active &&
    css`
      background-color: #6c99ae;
      border-color: #6c99ae;
      color: #f4f2f2;
    `}
`;
