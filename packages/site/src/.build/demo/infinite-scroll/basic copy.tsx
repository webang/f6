import { useRef, useState, useEffect } from "react";
import { Button, InfiniteScroll, InfiniteScrollMethods } from "f6";

function loadData(len: number, offset = 0) {
  return new Array(len).fill(0).map((_, index) => {
    return {
      label: `${offset + index} 哈哈`,
    };
  });
}

function fetchData(len: number, offset = 0) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(loadData(len, offset))
    }, 1000);
  })
}

const InfiniteScrollDemo = () => {
  const [isUseBody, setIsUseBody] = useState(true);
  const [state, setState] = useState({
    hasMore: true,
    loading: false,
    list: [],
  });
  const ref = useRef<InfiniteScrollMethods>(null);
  const renderItem = () => {
    return state.list.map((it) => (
      <div
        style={{
          lineHeight: `40px`,
          paddingLeft: 12,
          borderBottom: "1px solid #f5f5f5",
        }}
      >
        {it.label}
      </div>
    ));
  };

  useEffect(() => {
    onLoad(30, 0)
  }, [])

  const onLoad = async (size, offset, callback?: () => void) => {
    setState((prev) => ({...prev, loading: true }));
    const data = await fetchData(size, offset);

    setState(({ list }) => {
      // 2 选 1，使用 ref 或者 finish
      ref.current?.finish();
      callback?.();

      const nList = [...list, ...data];
      return {
        list: nList,
        loading: false,
        hasMore: nList.length < 100,
      };
    });
  };

  const onLoadMore = (callback?: () => void) => {
    onLoad(30, state.list.length, callback)
  }

  const resetHandle = () => {
    setState(() => {
      return {
        hasMore: true,
        loading: false,
        list: [],
      }
    });
    onLoad(30, 0);
  }

  const style = isUseBody ? {} : {
    overflow: "scroll",
    height: "300px",
    background: "#fff"
  }

  return (
    <div>
      <Button block onClick={resetHandle}>
        重置数据
      </Button>
      <Button block onClick={() => setIsUseBody(p => !p)}>
        {isUseBody ? 'Body' : '自定义容器'}
      </Button>
      <div className="demo" style={style}>
        <InfiniteScroll
          onLoad={onLoadMore}
          loading={state.loading}
          disabled={!state.hasMore}
          ref={ref}
        >
          {renderItem()}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default InfiniteScrollDemo;
