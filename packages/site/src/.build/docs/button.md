<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space>
      <Button type="default">默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
    </Space>
  )
}
```
</div>

<div class="block-panel"><h3>禁用状态</h3>

```jsx
import { Button } from 'f6';

export default function App () {
  return <Button disabled type="primary">禁用状态</Button>
}
```
</div>

<div class="block-panel"><h3>加载按钮</h3>

```jsx
import { Button } from 'f6';

export default function App() {
    return <Button loading type="primary">块级按钮</Button>
}
```
</div>

<div class="block-panel"><h3>朴素按钮</h3>

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space>
      <Button type="default" plain>默认按钮</Button>
      <Button type="primary" plain>主要按钮</Button>
      <Button type="success" plain>成功按钮</Button>
      <Button type="danger" plain>危险按钮</Button>
      <Button type="warning" plain>警告按钮</Button>
    </Space>
  )
}
```
</div>

<div class="block-panel"><h3>块级按钮</h3>

块级按钮：占据占据父元素的所有宽度。

```jsx
import { Button } from 'f6';

export default function App () {
  return <Button block type="primary">块级按钮</Button>
}
```
</div>

<div class="block-panel"><h3>按钮大小</h3>

```jsx
import { Button, Space } from 'f6';

function App() {
  return (
    <Space>
      <Button type="primary" size="middle">默认大小</Button>
      <Button type="primary" size="small">小型按钮</Button>
      <Button type="primary" size="mini">迷你按钮</Button>
    </Space>
  )
}

export default App;
```
</div>

<div class="block-panel"><h3>按钮形状</h3>

```jsx
import { Button, Space } from 'f6';

export default function App() {
  return (
    <Space>
      <Button shape="square" type="primary">方形按钮</Button>
      <Button shape="round" type="danger">圆角按钮</Button>
    </Space>
  )
}
```
</div>

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 按钮类型，可选值为：`primary` `info` `success` `warning` `danger` | string | `default` |
| size | 按钮大小，可选值为：`large` `middle` `small` `mini` | string | `middle` |
| square | 按钮形状，可选值为：`square` `round` | string | `square` |
| block | 是否块级按钮 | boolean | `false` |
| plain | 是否朴素按钮 | boolean | `false` |
| loading | 是否加载状态 | boolean | `false` |
| disabled | 是否禁用状态 | boolean | `false` |
| title | 按钮文字 | ReactNode | - |
| onClick |	非必需，点击后触发的回调函数 | `React.MouseEventHandler<Element>` | - |

```tsx
export type ButtonType = "primary" | "info" | "success" | "warning" | "danger" | "text";
export type ButtonSize = "large" | "small" | "mini" | "middle";
export type ButtonShape = 'round' | 'square';

interface BaseButtonProps {
  className?: string;
  title?: ReactNode; // 内容
  shape?: ButtonShape; // 形状
  type?: ButtonType; // 类型
  size?: ButtonSize; // 尺寸
  text?: string; // 按钮文字
  color?: string; // 按钮颜色
  block?: boolean; // 是否为块级元素
  plain?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

type NativeButtonProps =
  BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>;

export type ButtonProps = BaseButtonProps & NativeButtonProps;
```