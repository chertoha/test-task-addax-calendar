import { useGetHolidaysQuery } from "@/redux/holidays/holidaysApi";
import Calendar from "../Calendar";
import Trash from "../Trash";
import TrashProvider from "../TrashProvider";
import HolidaysProvider from "../HolidaysProvider";
import Header from "../Header";

const App = () => {
  const { data: holidays } = useGetHolidaysQuery();
  console.log(holidays);

  return (
    <HolidaysProvider>
      <TrashProvider>
        <main style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          <Header />
          <Trash />
          <div style={{ flexGrow: 1, overflow: "hidden" }}>
            <Calendar />
          </div>
        </main>
      </TrashProvider>
    </HolidaysProvider>
  );
};

export default App;
