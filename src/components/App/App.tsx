import { useGetHolidaysQuery } from "@/redux/holidays/holidaysApi";
import Calendar from "../Calendar";
import Trash from "../Trash";
import TrashProvider from "../TrashProvider";
import HolidaysProvider from "../HolidaysProvider";

const App = () => {
  const { data: holidays } = useGetHolidaysQuery();
  console.log(holidays);

  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header style={{ height: "100px", flexShrink: 0 }}>asdasd</header>
      <div style={{ flexGrow: 1, overflow: "hidden" }}>
        <HolidaysProvider>
          <TrashProvider>
            <Trash />
            <Calendar />
          </TrashProvider>
        </HolidaysProvider>
      </div>
    </main>
  );
};

export default App;
