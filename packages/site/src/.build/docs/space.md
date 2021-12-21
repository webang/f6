<div class="block-panel">

<h3>介绍</h3>

`Space` 用于设置多个组件之间的间距。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/space/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space>
      <Button type="default">默认按钮</Button>
      <Button color="primary">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
    </Space>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/space/demo/wrap.md>更新此演示代码</a>
        <h3>换行</h3>

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space wrap>
      <Button type="default">默认按钮</Button>
      <Button color="primary">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="default">默认按钮</Button>
      <Button color="primary">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
    </Space>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/space/demo/direction.md>更新此演示代码</a>
        <h3>换行</h3>

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space wrap direction="vertical">
      <Button type="default">默认按钮</Button>
      <Button color="primary">主要按钮</Button>
      <Button type="warning">警告按钮</Button>
    </Space>
  )
}
```
</div>
<div class="block-panel">

<h3>API</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| direction | 布局方向 | `vertical` \| `horizontal` | `horizontal` |
| wrap | 是否换行 | boolean | `true` |

```tsx
export interface SpaceProps {
  direction?: 'vertical' | 'horizontal',
  wrap?: boolean;
}
```
</div>