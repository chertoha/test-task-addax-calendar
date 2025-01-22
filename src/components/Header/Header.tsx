import useOffset from "@/hooks/useOffset";
import { getOffsetMonth, getOffsetYear } from "@/helpers/calculateCalendar";
import styled from "styled-components";
import { MONTHS } from "@/utils/date";

export const Wrapper = styled("header")`
  padding: 0 100px;
  width: 100%;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Buttons = styled("div")`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Header = () => {
  const { offset, decreaseOffset, increaseOffset } = useOffset();

  return (
    <Wrapper>
      <Buttons>
        <button onClick={decreaseOffset}>{"<"}</button>

        <button onClick={increaseOffset}>{">"}</button>
      </Buttons>

      {/* <p>{new Date(2025, getOffsetMonth(offset), 1).toDateString()}</p> */}
      <p>
        {MONTHS[getOffsetMonth(offset)].name} {getOffsetYear(offset)}
      </p>

      <Buttons>
        <button>Week</button>

        <button>Month</button>
      </Buttons>
    </Wrapper>
  );
};

export default Header;
