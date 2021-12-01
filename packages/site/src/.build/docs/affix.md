<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Affix, Button } from 'f6';

export default function App() {

  return (
    <div style={{ height: '800px', background: '#ccc' }}>
      <Affix top={20}>
        <Button size="sm" shape="round" type="primary">首页</Button>
      </Affix>
    </div>
  )
}
```
</div>

<div class="block-panel"><h3>设置容器</h3>

```jsx
import React from 'react';
import { Affix, Button } from 'f6';

export default function App() {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div class="test1" ref={ref} style={{ height: '200px', background: '#ccc', overflow: 'scroll', position: 'relative' }}>
      <div style={{ height: '100px' }}></div>
      <Affix top={30} container={() => ref.current}>
        <Button size="sm" shape="round" type="primary">首页</Button>
      </Affix>
      <div style={{ height: '400px' }}></div>
    </div>
  )
}
```
</div>

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| top | 距离顶部距离 | number | `0` |
| container | 相对偏移的容器 | ```(() => HTMLElement) | Window``` | `window` |
| wrapperStyle | 固钉 style | `(params: { fixed: boolean }) => React.CSSProperties` | - |