import Calendar from "../Calendar";
import Trash from "../Trash";
import Header from "../Header";
import MonthSwitcher from "../MonthSwitcher";
import DayList from "../DayList";

import {
  BottomSwitcherWrapper,
  CalendarWrapper,
  MainContainer,
  TopSwitcherWrapper,
} from "./App.styled";

const App = () => {
  return (
    <MainContainer>
      <Header />

      <Trash />

      <DayList />

      <TopSwitcherWrapper>
        <MonthSwitcher />
      </TopSwitcherWrapper>

      <CalendarWrapper>
        <Calendar />
      </CalendarWrapper>

      <BottomSwitcherWrapper>
        <MonthSwitcher next />
      </BottomSwitcherWrapper>
    </MainContainer>
  );
};

export default App;
