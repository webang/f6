<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Cell, SwipeCell, Button } from "f6";

export default function App() {
  return (
    <>
      <SwipeCell
        left={
          <Button color="primary" style={{ borderRadius: 0 }}>
            收藏
          </Button>
        }
        right={
          <Button type="danger" style={{ borderRadius: 0 }}>
            删除
          </Button>
        }
      >
        <Cell title="默认按钮" value="100"></Cell>
      </SwipeCell>
      <SwipeCell
        right={
          <Button color="primary" style={{ borderRadius: 0 }}>
            删除
          </Button>
        }
      >
        <Cell title="默认按钮" value="100"></Cell>
      </SwipeCell>
    </>
  );
}
```
</div>

<div class="block-panel">
<h3> Props</h3>

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