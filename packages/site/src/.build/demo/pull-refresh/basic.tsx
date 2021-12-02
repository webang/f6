import { FC, useState, useRef } from "react";
import { PullRefresh, PullRefreshRef } from "f6";

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
        {renderItem()}
      </PullRefresh>
    </div>
  );
};

export default App;
