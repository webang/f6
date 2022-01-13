<div class="block-panel">

<h3>介绍</h3>

在右上角展示徽标数字或小红点。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/badge/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Badge, Space } from "f6";

export default function App() {
  let tempStyle = {
    background: "#eee",
    width: "40px",
    height: "40px",
    display: "block",
    "border-radius": "8px",
  };
  return (
    <Space wrap>
      <Badge content="5">
        <div style={tempStyle}></div>
      </Badge>
      <Badge content="新">
        <div style={tempStyle}></div>
      </Badge>
      <Badge content="99">
        <div style={tempStyle}></div>
      </Badge>
    </Space>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/badge/demo/dot.md>更新此演示代码</a>
        <h3>展示小红点</h3>

```jsx
import { Badge, Space } from "f6";

export default function App() {
  let tempStyle = {
    background: "#eee",
    width: "40px",
    height: "40px",
    display: "block",
    "border-radius": "8px",
  };
  return (
    <Badge content={Badge.dot}>
      <div style={tempStyle}></div>
    </Badge>
  );
}
```
</div>
<div class="block-panel">

<h3>API</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| content | 徽标内容，传 Badge.dot，会显示小红点 | `React.ReactNode` \| `symbol` | - |
| color | 颜色 | string | `#FF411C` |

```ts
export type BadgeProps = {
  content?: React.ReactNode | symbol;
  color?: string;
  className?: string;
};
```
</div>