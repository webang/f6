<div class="block-panel">

<h3>介绍</h3>

`SwipeCell` 滑动操作。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/swipe-cell/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { useState } from "react";
import { Cell, SwipeCell, Button } from "f6";

export default function App() {
  const [list, setList] = useState([
    {
      title: "李白",
    },
    {
      title: "杜甫",
    },
  ]);
  const render = () => {
    return list.map((it, index) => {
      return (
        <SwipeCell
          left={
            <Button color="danger" type="primary">
              收藏
            </Button>
          }
          right={
            <Button
              onClick={() => {
                setList((prev) => {
                  return prev.filter((it, i) => i !== index);
                });
              }}
              color="primary"
              type="primary"
            >
              删除
            </Button>
          }
        >
          <Cell title={it.title} value="100"></Cell>
        </SwipeCell>
      );
    });
  };
  return <>{render()}</>;
}
```
</div>
<div class="block-panel">

<h3>API</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| right | 右侧插槽 | `React.ReactNode` | - |
| left | 左侧插槽 | `React.ReactNode` | - |

```tsx
export interface SwipeCellProps {
  className?: string;
  right?: React.ReactNode;
  left?: React.ReactNode;
}
```
</div>