import Calendar from "../Calendar";
import Trash from "../Trash";
import TrashProvider from "../TrashProvider";

const App = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header style={{ height: "100px", flexShrink: 0 }}>asdasd</header>
      <div style={{ flexGrow: 1, overflow: "hidden" }}>
        <TrashProvider>
          <Trash />
          <Calendar />
        </TrashProvider>
      </div>
    </main>
  );
};

export default App;
