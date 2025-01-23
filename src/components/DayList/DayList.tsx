import { DAYS } from "@/utils/date";
import styled from "styled-components";

export const List = styled("ul")`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  /* background-color: #b0d9f2; */
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
