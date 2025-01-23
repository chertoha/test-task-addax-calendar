import Calendar from "../Calendar";
import Trash from "../Trash";
import Header from "../Header";
import MonthSwitcher from "../MonthSwitcher";
import DayList from "../DayList";

const App = () => {
  return (
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
  );
};

export default App;
