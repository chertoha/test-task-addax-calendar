import Calendar from "../Calendar";
import Trash from "../Trash";
import Header from "../Header";
import MonthSwitcher from "../MonthSwitcher";
import DayList from "../DayList";
import styled from "styled-components";

export const MainContainer = styled("main")`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => {
  return (
    <MainContainer>
      <Header />
      <Trash />

      <DayList />
      <div style={{ marginBottom: "5px" }}>
        <MonthSwitcher />
      </div>

      <div style={{ flexGrow: 1, overflow: "hidden" }}>
        <Calendar />
      </div>

      <div style={{ marginTop: "5px" }}>
        <MonthSwitcher next />
      </div>
    </MainContainer>
  );
};

export default App;
