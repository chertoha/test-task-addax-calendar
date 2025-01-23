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
          <MonthSwitcher />

          <div style={{ flexGrow: 1, overflow: "hidden" }}>
            <Calendar />
          </div>

          <MonthSwitcher next />
        </main>
      </TrashProvider>
    </HolidaysProvider>
  );
};

export default App;
