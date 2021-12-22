<div class="block-panel">

<h3>介绍</h3>

Popover 已轻微弹窗的方式，呈现在所触发元素的周围，弹窗内容可以是任意的，通常是提示文本或者菜单列表。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/popover/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
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
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/popover/demo/top.md>更新此演示代码</a>
        <h3>顶部对其</h3>

```jsx
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
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/popover/demo/bottom.md>更新此演示代码</a>
        <h3>底部对齐</h3>

```jsx
import { Button, Popover, Cell } from "f6";

function App() {
  return (
    <Cell.Group>
      <Cell
        title="bottom-start"
        link
        value={
          <Popover
            placement="bottom-start"
            content={<div style={{ width: 100 }}>hello world</div>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="bottom"
        link
        value={
          <Popover
            placement="bottom"
            content={<div style={{ width: 100 }}>hello world</div>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="bottom-end"
        link
        value={
          <Popover
            placement="bottom-end"
            content={<div style={{ width: 100 }}>this is a long tip</div>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
    </Cell.Group>
  );
}

export default App;
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/popover/demo/left.md>更新此演示代码</a>
        <h3>左侧对其</h3>

```jsx
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
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/popover/demo/right.md>更新此演示代码</a>
        <h3>右侧对其</h3>

```jsx
import { Button, Popover, Cell } from "f6";

function App() {
  return (
    <Cell.Group>
      <Cell
        title="right-start"
        link
        value={
          <Popover
            placement="right-start"
            content={<div style={{ width: 100 }}>hello world</div>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="right"
        link
        value={
          <Popover
            placement="right"
            content={<div style={{ width: 100 }}>hello world</div>}
            reference={<Button size={"mini"}>显示</Button>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
      <Cell
        title="right-end"
        link
        value={
          <Popover
            placement="right-end"
            content={<div style={{ width: 100 }}>this is a long tip</div>}
            reference={<Button size={"mini"}>显示</Button>}
          >
            <Button size={"mini"}>显示</Button>
          </Popover>
        }
      />
    </Cell.Group>
  );
}

export default App;
```
</div>
<div class="block-panel">

<h3>API</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| reference | 触发元素 | `React.ReactElement` | `false` |
| placement | 弹窗位置 | `PlacementType` | - |
| verticalDistance | 垂直距离 | `number` | `8` |
| horizontalDistance | 水平距离 | `number` | `8` |
| trigger | 触发方式（目前只有`click`） | `click` | `click` |
| visible | 可见性(受控) | `boolean` | - |
| defaultVisible | 默认可见性 | `boolean` | `false` |
| onVisibleChange | 可见性变化，受控状态有用 | `(visible: boolean) => void` | - |

```tsx
export type PlacementType =
  | "top"
  | "top-start"
  | "top-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end";

export interface PopoverProps {
  reference: React.ReactElement;
  placement?: PlacementType;
  verticalDistance?: number;
  horizontalDistance?: number;
  trigger?: "click";
  visible?: boolean;
  defaultVisible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
}
```
</div>