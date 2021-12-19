<div class="block-panel">

<h3>介绍</h3>

`PullRefresh` 用于下拉触发刷新。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/pull-refresh/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { FC, useState, useRef } from "react";
import { PullRefresh, Button, PullRefreshRef } from "f6";

function loadData(len: number, start = 0) {
  return new Array(len).fill(0).map((_, index) => {
    return {
      label: `${start + index} 哈哈`,
    };
  });
}

const App: FC = () => {
  const [state, setState] = useState({
    hasMore: true,
    list: loadData(20),
  });
  const ref = useRef<PullRefreshRef>(null);

  const renderItem = () => {
    return state.list.map((it, index) => (
      <div
        key={index}
        style={{
          lineHeight: `50px`,
          paddingLeft: 12,
          borderBottom: "1px solid #f5f5f5",
        }}
      >
        {it.label}
      </div>
    ));
  };

  const onLoad = () => {
    setTimeout(() => {
      ref.current.finish();
    }, 1000);
  };

  return (
    <div
      className="demo"
      style={{ overflow: "scroll", height: "300px", background: "#fff" }}
    >
      <PullRefresh ref={ref} onLoad={onLoad}>
        <Button
          block
          onClick={() => {
            ref.current.refresh();
          }}
        >
          接口触发刷新
        </Button>
        {renderItem()}
      </PullRefresh>
    </div>
  );
};

export default App;
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| topPullDistance | 触发刷新时距离顶部的距离 | `number` | `40` |
| topMaxPullDistance | 最大下来距离 | `number` | `60` |
| loadingText | 加载提示 | `string` | `加载中` |
| pullText | 下拉提示 | `string` | `下拉刷新` |
| looseText | 可以刷新提示 | `string` | ReactNode |
| onLoad | 刷新回调 | `() => void` | - |

```tsx
export interface PullRefreshProps {
  topPullDistance?: number;
  topMaxPullDistance?: number;
  loadingText?: string;
  pullText?: string;
  looseText?: string;
  onLoad?: () => void;
}
```


</div>
<div class="block-panel">

<h3>Refs</h3>

| 属性 | 说明 | 签名 |
| :-  | :- | :- |
| finish | 结束刷新 | `() => void` |
| refresh | 触发刷新 | `() => void` |

```tsx
export interface PullRefreshRef {
  finish: () => void;
  refresh: () => void;
}
```
</div>