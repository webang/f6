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
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="left"
        link
        value={
          <Popover
            placement="left"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="left-end"
        link
        value={
          <Popover
            placement="left-end"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>this is a long tip</div>
          </Popover>
        }
      />
    </Cell.Group>
  );
}

export default App;
