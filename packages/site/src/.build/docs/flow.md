<div class="block-panel">

<h3>介绍</h3>

`Flow` 步骤条，常用于流程化展示处理进度。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/flow/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { useState } from 'react';
import { Flow, Button } from "f6";

export default function () {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(p => p + 1 > 3 ? 0 : p + 1)
  return (
    <>
      <Flow current={current}>
        <Flow.Item index={0} title='标题1' description='描述'></Flow.Item>
        <Flow.Item index={1} title='标题2' description='描述'></Flow.Item>
        <Flow.Item index={2} title='标题2' description='描述'></Flow.Item>
      </Flow>
      <div style={{ height: 16 }}></div>
      <Button block onClick={next}>next</Button>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/flow/demo/direction.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { useState } from 'react';
import { Flow, Button } from "f6";

export default function () {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(p => p + 1 > 3 ? 0 : p + 1)
  return (
    <>
      <Flow current={current} direction="vertical">
        <Flow.Item index={0} title='标题1' description='描述'></Flow.Item>
        <Flow.Item index={1} title='标题2' description='描述'></Flow.Item>
        <Flow.Item index={2} title='标题2' description='描述'></Flow.Item>
      </Flow>
      <div style={{ height: 16 }}></div>
      <Button block onClick={next}>next</Button>
    </>
  );
}
```
</div>
<div class="block-panel">

<h3>FlowProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| current | 当前步骤索引 | number | `0` |
| direction | 排列方向 | `horizontal \| vertical` | `horizontal` |
| finishIcon | 已完成图标 | ReactNode | - |
| processIcon | 处理中图标 | ReactNode | - |
| waitingIcon | 等待中图标 ｜ ReactNode | - |

```tsx
export interface FlowContext {
  current: number;
  direction: 'horizontal' | 'vertical';
  finishIcon: ReactNode;
  processIcon: ReactNode;
  waitingIcon: ReactNode;
}

export interface FlowProps extends FlowContext {}
```


</div>
<div class="block-panel">

<h3>FlowItemProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| index | 索引 | number | - |
| title | 标题 | ReactNode | - |
| description | 描述 | ReactNode | - |

```tsx
export interface FlowItemProps {
  index: number;
  title: ReactNode;
  description: ReactNode;
}
```
</div>