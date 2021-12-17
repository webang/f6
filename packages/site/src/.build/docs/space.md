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

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| direction | 布局方向 | `vertical` \| `horzontal` | `horzontal` |
| wrap | 是否换行 | boolean | `true` |
| align | 副轴对其方式 | - | `start` |
| justify | 主轴对其方式 | - | `start` |

```tsx
export interface SpaceProps {
  direction?: 'vertical' | 'horizontal',
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  wrap?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
```
</div>