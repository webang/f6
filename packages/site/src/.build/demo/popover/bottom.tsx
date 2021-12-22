import { Button, Popover, Cell } from "f6";

function App() {
  return (
    <Cell.Group>
      <Cell
        title="top-start"
        link
        value={
          <Popover
            placement="top-start"
            content={<div style={{ width: 100 }}>hello world</div>}
          >
            <Button size={"mini"} title="显示" />
          </Popover>
        }
      />
      <Cell
        title="top"
        link
        value={
          <Popover
            placement="top"
            content={<div style={{ width: 100 }}>hello world</div>}
          >
            <Button size={"mini"} title="显示" />
          </Popover>
        }
      />
      <Cell
        title="top-end"
        link
        value={
          <Popover
            placement="top-end"
            content={<div style={{ width: 100 }}>hello world</div>}
          >
            <Button size={"mini"} title="显示" />
          </Popover>
        }
      />
    </Cell.Group>
  );
}

export default App;
