<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Affix, Button } from "f6";

export default function App() {
  return (
    <div style={{ height: "700px", background: "#607d8b" }}>
      <Affix top={20}>
        <Button size="sm" shape="round" color="primary">
          首页
        </Button>
      </Affix>
    </div>
  );
}
```
</div>

<div class="block-panel"><h3>设置容器</h3>

```jsx
import React from "react";
import { Affix, Button } from "f6";

export default function App() {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      style={{
        height: "200px",
        background: "#607d8b",
        overflow: "scroll",
        position: "relative",
      }}
    >
      <div style={{ height: "40px" }}></div>
      <Affix top={10} container={() => ref.current}>
        <Button size="sm" shape="round" color="primary">
          首页
        </Button>
      </Affix>
      <div style={{ height: "300px" }}></div>
    </div>
  );
}
```
</div>

<div class="block-panel">
<h3> Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| top | 距离顶部距离 | number | `0` |
| container | 相对偏移的容器 | `(() => HTMLElement) \| Window` | `window` |
| wrapperStyle | 容器样式 | `(params: { fixed: boolean }) => React.CSSProperties` | - |

```tsx
export interface AffixProps {
  top?: number;
  container?: (() => HTMLElement) | Window;
  wrapperStyle?: (params: { fixed: boolean }) => React.CSSProperties;
}
```
</div>