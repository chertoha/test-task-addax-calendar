import Calendar from "../Calendar";

const App = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header style={{ height: "200px", flexShrink: 0 }}>asdasd</header>
      <div style={{ flexGrow: 1, overflow: "hidden" }}>
        <Calendar />
      </div>
    </main>
  );
};

export default App;
