<div class="block-panel">

<h3>介绍</h3>

Spinner 用于表明应用正在加载内容，或者处理耗时的任务，需要用户等待。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/spinner/demo/basic.md>更新此演示代码</a>
        <h3>动画类型</h3>

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

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/spinner/demo/size.md>更新此演示代码</a>
        <h3>自定义大小</h3>

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
<div class="block-panel">

<h3>API</h3>

```tsx
// crescent 月牙形
// oval 椭圆形
// lines 线性
export type SpinnerType = "lines" | "crescent" | "oval";

export interface SpinnerProps {
  size?: number | string;
  type?: SpinnerType;
  className?: string;
  style?: CSSProperties;
}
```

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 动画类型 | `SpinnerType` | `crescent` |
| size | 大小 | `number \| string` | - |
</div>