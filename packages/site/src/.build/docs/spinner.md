<div class="block-panel"><h3>动画类型</h3>

```jsx
import { Spinner, Cell } from "f6";
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
```
</div>

<div class="block-panel"><h3>自定义大小</h3>

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
</div>

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 动画类型，可选值为 `lines` `oval` `crescent` | string | `crescent` |
| size | 大小 | number / string | - |