import Calendar from "../Calendar";

const App = () => {
  return (
    <main style={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}>
      <header style={{ height: "200px" }}></header>
      <Calendar />
    </main>
  );
};

export default App;
