<div class="block-panel">

<h3>介绍</h3>

页面导航组件，常用于页面顶部。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/nav-bar/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from "react";
import { NavBar } from "f6";

const style = {
  marginBottom: 10,
};

function App() {
  return (
    <div style={{ marginLeft: "-16px", marginRight: "-16px" }}>
      <NavBar>标题</NavBar>
    </div>
  );
}

export default App;
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| left | 左侧内容 | `ReactNode` | - |
| right | 右侧内容 | `ReactNode` | - |
| backText | 返回文字 | `ReactNode` | - |
| backArrow | 显示返回按钮 | `boolean` | - |
| onBack | 返回事件 | `() => void` | - |

```tsx
export interface NavBarProps {
  left?: ReactNode;
  right?: ReactNode;
  backText?: ReactNode;
  backArrow?: boolean | ReactNode;
  children?: ReactNode;
  onBack?: () => void;
}
```
</div>