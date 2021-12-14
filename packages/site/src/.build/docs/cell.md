<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Cell, Button } from "f6";

const button = (<Button size="mini" color="primary">详情</Button>);

export default function() {
  return (
    <Cell.Group>
      <Cell title={"单元格"} value={"100"} link />
      <Cell
        title={"单元格"}
        value={button}
        link
      />
      <Cell title={"单元格"} label={"描述信息"} value={"100"} link />
    </Cell.Group>
  )
};
```
</div>

<div class="block-panel"><h3>底部边框</h3>

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

<div class="block-panel"><h3>展示图标</h3>

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

<div class="block-panel"><h3>使用分组</h3>

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

<div class="block-panel"><h3>长副标题</h3>

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

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| title | 标题 | ReactNode | - |
| label | 描述 | ReactNode | - |
| value | 最右侧内容 | ReactNode | - |
| icon | 展示在最左侧的图标 | ReactNode ｜ - ｜
| border | 是否显示底部边框 | boolean | `true` |
| url | 点击跳转的地址 | string | - |

### API

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| onClick |	非必需，点击后触发的回调函数 | `React.MouseEventHandler<Element>` | - |