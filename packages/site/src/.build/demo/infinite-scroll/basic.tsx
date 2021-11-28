import { useRef, useState } from 'react';
import { InfiniteScroll } from 'f6/packages';
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
