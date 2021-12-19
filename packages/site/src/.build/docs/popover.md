<div class="block-panel">

<h3>介绍</h3>

Popover 已轻微弹窗的方式，呈现在所触发元素的周围，弹窗内容可以是任意的，通常是提示文本或者菜单列表。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/popover/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

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
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="bottom"
        link
        value={
          <Popover
            placement="bottom"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="bottom-end"
        link
        value={
          <Popover
            placement="bottom-end"
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
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="top"
        link
        value={
          <Popover
            placement="top"
            reference={<Button size={"mini"}>显示</Button>}
          >
            <div style={{ width: 100 }}>hello world</div>
          </Popover>
        }
      />
      <Cell
        title="top-end"
        link
        value={
          <Popover
            placement="top-end"
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
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| reference | 触发元素 | boolean | `false` |
| placement | 弹窗位置 | `PlacementType` ｜ - |
| verticalDistance | 垂直距离 | `number` | `8` |
| horizontalDistance | 水平距离 | `number` | `8` |

```tsx
export interface PopoverProps {
  reference: React.ReactElement;
  placement?: PlacementType;
  verticalDistance?: number;
  horizontalDistance?: number;
}

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
```
</div>