import Calendar from "../Calendar";
import Trash from "../Trash";
import TrashProvider from "../TrashProvider";
import HolidaysProvider from "../HolidaysProvider";
import Header from "../Header";
import MonthSwitcher from "../MonthSwitcher";
import DayList from "../DayList";

const App = () => {
  return (
    <HolidaysProvider>
      <TrashProvider>
        <main style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
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
        </main>
      </TrashProvider>
    </HolidaysProvider>
  );
};

export default App;
