import { DAYS } from "@/utils/date";
import styled from "styled-components";

export const List = styled("ul")`
  display: grid;

  /* height: 100%; */

  grid-template-columns: repeat(7, minmax(0, 1fr));
  /* grid-template-rows: repeat(6, minmax(0, 1fr)); */

  gap: 5px;
`;

export const Item = styled("li")`
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DayList = () => {
  return (
    <List>
      {DAYS.map(({ short }, i) => (
        <Item key={i}>
          <p>{short}</p>
        </Item>
      ))}
    </List>
  );
};

export default DayList;
