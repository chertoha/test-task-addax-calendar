import { FC } from "react";

import AddTaskButton from "../AddTaskButton";

import { isLastDayOfMonth, MONTHS } from "@/utils/date";
import { DateText, DateTextWrapper, ToolbarCardsText, ToolbarContainer } from "./Day.styled";

interface IProps {
  date: Date;
  cardsNum: number;
  lastTaskOrder: number;
  showNewTask: (id: number | string) => void;
}

const Toolbar: FC<IProps> = ({ date, cardsNum, lastTaskOrder, showNewTask }) => {
  const shouldShowMonthName = isLastDayOfMonth(date) || date.getDate() === 1;
  return (
    <ToolbarContainer>
      <DateTextWrapper>
        <DateText>
          {shouldShowMonthName && MONTHS[date.getMonth()].short} {date.getDate()}
        </DateText>

        {!!cardsNum && (
          <ToolbarCardsText>
            {cardsNum}
            {cardsNum === 1 ? " card" : " cards"}{" "}
          </ToolbarCardsText>
        )}
      </DateTextWrapper>

      <AddTaskButton
        date={date}
        lastOrderValue={lastTaskOrder}
        showNewTask={showNewTask}
      />
    </ToolbarContainer>
  );
};

export default Toolbar;
