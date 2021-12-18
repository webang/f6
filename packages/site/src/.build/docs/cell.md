<div class="block-panel">

<h3>介绍</h3>

Cell 充当列表中的展示项，常包含标题、图标以及描述。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/cell/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Cell, Button, Toast } from "f6";

const button = (
  <Button size="mini" color="primary">
    详情
  </Button>
);

export default function () {
  return (
    <Cell.Group>
      <Cell title={"单元格"} value={"100"} link />
      <Cell title={"单元格"} value={button} link />
      <Cell title={"单元格"} label={"描述信息"} value={"100"} link />
      <Cell
        onClick={() => Toast.show({ message: "😄" })}
        title={"点我试试"}
        value={"100"}
        link
      />
    </Cell.Group>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/cell/demo/border.md>更新此演示代码</a>
        <h3>底部边框</h3>

```jsx
import { Cell, Button } from "f6";

const button = (<Button size="mini" color="primary">详情</Button>);

export default function() {
  return (
    <Cell.Group>
      <Cell
        title={"无边框"}
        value={button}
        link
        border={false}
      />
      <Cell title={"有边框"} value={"100"} link />
      <Cell
        title={"无边框"}
        value={"100"}
        link
      />
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/cell/demo/icon.md>更新此演示代码</a>
        <h3>展示图标</h3>

```jsx
import { Cell, Button } from "f6";

const button = (<Button size="mini" color="primary">详情</Button>);
const label = <span>乱山千叠横江，忆君游倦何方。知否小窗红烛，照人此夜凄凉。</span>;
const icon = <img width={24} src="https://avatars.githubusercontent.com/u/34447750?s=40&v=4" /> 

export default function() {
  return (
    <Cell.Group>
      <Cell icon={icon} title={"单元格"} value={"100"} link />
      <Cell
        title={"单元格"}
        icon={icon}
        value={button}
        label={label}
        link
      />
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/cell/demo/group.md>更新此演示代码</a>
        <h3>使用分组</h3>

```jsx
import { Cell, Button } from "f6";
export default function() {
  return (
    <>
      <Cell title={"有边框"} value={"100"} link />
      <Cell
        title={"无边框"}
        value={"100"}
        link
      />
      <div style={{ height: 10 }}></div> 
      <Cell.Group>
        <Cell title={"有边框"} value={"100"} link />
        <Cell
          title={"无边框"}
          value={"100"}
          link
        />
      </Cell.Group>
    </>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/cell/demo/label.md>更新此演示代码</a>
        <h3>长副标题</h3>

```jsx
import { Cell, Button } from "f6";

const labelStyle = {
  display: 'inline-block',
  width: '60%'
}

export default function() {
  return (
    <Cell.Group>
      <Cell
        title={"单元格"}
        label={
          <span style={labelStyle}>乱山千叠横江，忆君游倦何方。知否小窗红烛，照人此夜凄凉。</span>
        }
        value={"100"}
        link
      />
    </Cell.Group>
  )
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| title | 标题 | `ReactNode` | - |
| titleAlign | 标题对其方式 | `top \| left` | - |
| label | 底部描述 | `ReactNode` | - |
| icon | 左侧图标 | `ReactNode` | - |
| value | 最右侧内容 | `ReactNode` | - |
| border | 是否显示底部边框 | `boolean` | `true` |
| onClick |	点击后触发的回调函数 | `React.MouseEventHandler<Element>` | - |

```tsx
export interface CellProps {
  className?: string;
  title: ReactNode;
  titleAlign?: "left" | "top";
  titleClass?: string;
  label?: ReactNode;
  value?: ReactNode;
  icon?: ReactNode;
  bodyStyle?: React.CSSProperties;
  border?: boolean;
  link?: boolean;
  onClick?: React.MouseEventHandler<Element>;
}
```
</div>