import Calendar from "../Calendar";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", maxHeight: "100vh" }}>
      <div style={{ height: "200px" }}></div>
      <Calendar />
    </div>
  );
};

export default App;
