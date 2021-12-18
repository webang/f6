<div class="block-panel">

<h3>介绍</h3>

Loading 用于展示加载状态，包括加载动画和描述，它基于 spinner。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/loading/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from 'react';
import { Button, Space, Overlay, Loading } from 'f6';

function App() {
  return (
    <Space>
      <Loading spinnerType="lines">Loading</Loading>
      <Loading spinnerType="oval">Loading</Loading>
      <Loading spinnerType="crescent">Loading</Loading>
    </Space>
  )
}

export default App;
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/loading/demo/size.md>更新此演示代码</a>
        <h3>自定义大小</h3>

```jsx
import React from 'react';
import { Button, Space, Overlay, Loading } from 'f6';

export default function App() {
  return (
    <Space>
      <Loading spinnerSize={20} spinnerType="oval">Loading</Loading>
      <Loading spinnerSize={24} spinnerType="oval">Loading</Loading>
      <Loading spinnerSize={30} spinnerType="lines">Loading</Loading>
    </Space>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/loading/demo/vertical.md>更新此演示代码</a>
        <h3>垂直排列</h3>

```jsx
import React from 'react';
import { Button, Space, Overlay, Loading } from 'f6';

export default function App() {
  return (
    <Space>
      <Loading vertical spinnerSize={24} spinnerType="oval">加载中</Loading>
      <Loading vertical spinnerSize={24} spinnerType="oval">加载中</Loading>
      <Loading vertical spinnerSize={24} spinnerType="lines">加载中</Loading>
    </Space>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/loading/demo/color.md>更新此演示代码</a>
        <h3>设置颜色</h3>

```jsx
import React from 'react';
import { Button, Overlay, Loading } from 'f6';

export default function App() {
  return (
    <div>
      <Loading style={{ color: '#3f51b5' }}>Loading</Loading>
    </div>
  )
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| spinnerType | spinner 类型 | `lines \| oval \| crescent` | `crescent` |
| spinnerSize | spinner 大小 | `string \| number` | `24` |
| vertical | 是否垂直排列 | `boolean` | `false` |
| message | 文字 | `ReactNode` | `Loading` |

```tsx
export interface LoadingProps {
  spinnerType?: SpinnerType;
  spinnerSize?: string|number;
  className?: string;
  style?: React.CSSProperties;
  vertical?: boolean;
  message?: ReactNode;
}
```
</div>