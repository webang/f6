---
order: 1
title: 自定义大小
---

```jsx
import { Spinner, Cell } from "f6";
function App() {
  return (
    <Cell.Group>
      <Cell
        title={"默认大小"}
        value={<Spinner type="lines" style={{ color: "#666" }} />}
      />
      <Cell
        title={"26"}
        value={<Spinner type="lines" size={26} style={{ color: "#666" }} />}
      />
      <Cell
        title={"30"}
        value={<Spinner type="lines" size={30} style={{ color: "#666" }} />}
      />
    </Cell.Group>
  );
}

export default App;
```