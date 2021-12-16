<div class="block-panel"><h3>基本用法</h3>

```jsx
import { BackTop } from 'f6';

export default function App() {
  return (
    <div>
      <div style={{ height: 400 }} />
      <BackTop bottom={20}></BackTop>
      <div style={{ height: 400 }} />
    </div>
  )
}
```
</div>

<div class="block-panel">
<h3> Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| distance | 滚动距离阈值，超出这个值显示按钮 | number | `10` |

```ts
export interface BackTopProps {
  distance?: number;
}
```
</div>