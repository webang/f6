import React from "react";
import { Button, Popover, Cell } from "f6";

function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <Cell.Group>
      <Cell
        title="bottom"
        link
        value={
          <Popover
            visible={visible}
            onVisibleChange={setVisible}
            placement="bottom"
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
