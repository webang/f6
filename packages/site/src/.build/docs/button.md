<div class="block-panel">

<h3>介绍</h3>

Button 用于点击触发一个操作，它可以包含文本、图片等资源。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/button/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space>
      <Button color="default">默认按钮</Button>
      <Button color="primary">主要按钮</Button>
      <Button color="success">成功按钮</Button>
      <Button color="danger">危险按钮</Button>
      <Button color="warning">警告按钮</Button>
    </Space>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/button/demo/disabled.md>更新此演示代码</a>
        <h3>禁用状态</h3>

```jsx
import { Button } from 'f6';

export default function App () {
  return <Button disabled color="primary">禁用状态</Button>
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/button/demo/fill.md>更新此演示代码</a>
        <h3>填充模式</h3>

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space>
      <Button color="default" fill="solid">默认按钮</Button>
      <Button color="default" fill="outline">默认按钮</Button>
      <Button color="default" fill="none">默认按钮</Button>

      <Button color="primary" fill="solid">默认按钮</Button>
      <Button color="primary" fill="outline">默认按钮</Button>
      <Button color="primary" fill="none">默认按钮</Button>

      <Button color="danger" fill="solid">危险按钮</Button>
      <Button color="danger" fill="outline">危险按钮</Button>
      <Button color="danger" fill="none">危险按钮</Button>

      <Button color="warning" fill="solid">默认按钮</Button>
      <Button color="warning" fill="outline">默认按钮</Button>
      <Button color="warning" fill="none">默认按钮</Button>

      <Button color="success" fill="solid">默认按钮</Button>
      <Button color="success" fill="outline">默认按钮</Button>
      <Button color="success" fill="none">默认按钮</Button>
    </Space>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/button/demo/loading.md>更新此演示代码</a>
        <h3>加载按钮</h3>

```jsx
import { Button } from 'f6';

export default function App() {
    return <Button loading color="primary">块级按钮</Button>
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/button/demo/block.md>更新此演示代码</a>
        <h3>块级按钮</h3>

块级按钮：占据占据父元素的所有宽度。

```jsx
import { Button } from 'f6';

export default function App () {
  return <Button block color="primary">块级按钮</Button>
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/button/demo/size.md>更新此演示代码</a>
        <h3>按钮大小</h3>

```jsx
import { Button, Space } from 'f6';

function App() {
  return (
    <Space>
      <Button color="primary" size="middle">默认大小</Button>
      <Button color="primary" size="small">小型按钮</Button>
      <Button color="primary" size="mini">迷你按钮</Button>
    </Space>
  )
}

export default App;
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/button/demo/shape.md>更新此演示代码</a>
        <h3>按钮形状</h3>

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space>
      <Button shape="default" color="primary">默认形状</Button>
      <Button shape="square" color="primary">方形按钮</Button>
      <Button shape="round" color="primary">圆角按钮</Button>
    </Space>
  )
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| color | 按钮颜色，可选值为：`primary` `info` `success` `warning` `danger` | string | `default` |
| size | 按钮大小，可选值为：`large` `middle` `small` `mini` | string | `middle` |
| square | 按钮形状，可选值为：`square` `round` | string | `square` |
| block | 是否块级按钮 | boolean | `false` |
| fill | 填充模式 | `solid` \| `outline` \| `none` | `solid` |
| loading | 是否加载状态 | boolean | `false` |
| disabled | 是否禁用状态 | boolean | `false` |
| title | 按钮文字 | ReactNode | - |
| onClick |	非必需，点击后触发的回调函数 | `React.MouseEventHandler<Element>` | - |


```tsx
export type ButtonColor = "primary" | "info" | "success" | "warning" | "danger";
export type ButtonSize = "large" | "small" | "mini" | "middle";
export type ButtonShape = 'round' | 'square' | 'default';
export type ButtonFill = 'solid' | 'outline' | 'none';

interface BaseButtonProps {
  className?: string;
  title?: ReactNode; // 按钮内容
  shape?: ButtonShape; // 按钮形状
  color?: ButtonColor; // 按钮颜色
  size?: ButtonSize; // 尺寸
  fill?: ButtonFill; // 填充模式
  block?: boolean; // 是否为块级元素
  loading?: boolean;
  disabled?: boolean;
}

type NativeButtonProps =
  BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>;

export type ButtonProps = BaseButtonProps & NativeButtonProps;
```
</div>