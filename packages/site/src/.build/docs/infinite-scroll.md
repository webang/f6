<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/infinite-scroll/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { useRef, useState } from 'react';
import { InfiniteScroll } from 'f6';
import { InfiniteScrollMethods } from 'f6/packages/infinite-scroll';

function loadData(len: number, start = 0) {
  return (new Array(len).fill(0)).map((_, index) => {
    return {
      label: `${start + index} 哈哈`
    }
  })
}

const InfiniteScrollDemo = () => {
  const [state, setState] = useState({
    hasMore: true,
    list: loadData(20)
  })
  const ref = useRef<InfiniteScrollMethods>(null)

  const renderItem = () => {
    return state.list.map((it) => (
      <div style={{ lineHeight: `40px`, paddingLeft: 12, borderBottom: '1px solid #f5f5f5' }}>
        {it.label}
      </div>
    ))
  }

  const onLoad = () => {
    setTimeout(() => {
      setState(({ list }) => {
        const nList = [...list, ...loadData(20, list.length)];
        return {
          list: nList,
          hasMore: nList.length < 50
        }
      });
      ref.current?.finish();
    }, 500)
  }

  return (
    <div className="demo" style={{ overflow: 'scroll', height: '300px', background: '#fff' }}>
      <InfiniteScroll hasMore={state.hasMore} onLoad={onLoad} ref={ref}>
        {renderItem()}
      </InfiniteScroll>
    </div>
  )
}

export default InfiniteScrollDemo;
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| hasMore | 数据是否加加载完毕 | boolean | `true` |
| onLoad | 滚动到底部后回调 | Function | - |
| footer | 底部提示，默认情况：加载状态展示 loading，加载完毕后展示 NO MORE | ReactNode |


</div>
<div class="block-panel">

<h3>API</h3>

| 属性 | 说明 | 签名 |
| :-  | :- | :- |
| finish | 结束加载状态 | - |
</div>