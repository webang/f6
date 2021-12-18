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
    }, 3000);
  })
}

const initState = () => ({
  pageSize: 30,
  offset: 0,
  hasMore: true,
  loading: false,
  list: [],
})

const InfiniteScrollDemo = () => {
  const [isUseBody, setIsUseBody] = useState(false);
  const [state, setState] = useState(initState());
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

  const onLoad = async (offset, callback?: () => void) => {
    const data = await fetchData(state.pageSize, offset);
    setState((prev) => {
      callback?.();
      const nList = [...prev.list, ...data];
      return {
        ...prev,
        list: nList,
        loading: false,
        hasMore: nList.length < 100,
      };
    });
  };

  useEffect(() => {
    if (state.loading) {
      onLoad(state.list.length)
    }
  }, [state.loading])

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      loading: true
    }))
  }, [])

  const onLoadMore = (callback?: () => void) => {
    if (!state.loading) {
      setState((prev) => ({
        ...prev,
        loading: true
      }))
    }
  }

  const resetHandle = () => {
    setState(() => ({
      ...initState(),
      loading: true
    }));
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
        >
          {renderItem()}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default InfiniteScrollDemo;
