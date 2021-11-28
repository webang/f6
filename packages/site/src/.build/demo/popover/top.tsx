import { Button, Popover, Cell } from "f6/packages";

function App() {
  return (
    <Cell.Group>
      <Cell
        title="right-start"
        link
        value={
          <Popover
            placement="right-start"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="right"
        link
        value={
          <Popover
            placement="right"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="right-end"
        link
        value={
          <Popover
            placement="right-end"
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
