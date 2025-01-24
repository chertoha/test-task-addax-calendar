import { DAYS } from "@/utils/date";
import { Item, List } from "./DayList.styled";

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
