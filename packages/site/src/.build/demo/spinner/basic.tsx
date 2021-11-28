import { Spinner, Cell } from "f6/packages";
function App() {
  return (
    <Cell.Group>
      <Cell
        title={"lines"}
        value={<Spinner type="lines" style={{ color: "#666" }} />}
      />
      <Cell
        title={"oval"}
        value={<Spinner type="oval" style={{ color: "#666" }} />}
      />
      <Cell
        title={"crescent"}
        value={<Spinner type="crescent" style={{ color: "#666" }} />}
      />
    </Cell.Group>
  );
}

export default App;
