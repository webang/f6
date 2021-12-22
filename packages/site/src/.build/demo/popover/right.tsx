import { Button, Popover, Cell } from "f6";

function App() {
  return (
    <Cell.Group>
      <Cell
        title="left-start"
        link
        value={
          <Popover
            placement="left-start"
            content={
            <div style={{ width: 100 }}>hello world</div>
            }
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="left"
        link
        value={
          <Popover
            placement="left"
            content={
            <div style={{ width: 100 }}>hello world</div>
            }
          >
          <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="left-end"
        link
        value={
          <Popover
            placement="left-end"
            content={
            <div style={{ width: 100 }}>this is a long tip</div>
            }
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
    </Cell.Group>
  );
}

export default App;
