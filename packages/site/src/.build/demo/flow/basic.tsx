import { useState } from 'react';
import { Cell, Flow, Field, Toast, Button } from "f6";

export default function () {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(p => p + 1 > 3 ? 0 : p + 1)
  return (
    <>
      <Flow current={current}>
        <Flow.Item index={0} title='标题1' description='描述'></Flow.Item>
        <Flow.Item index={1} title='标题2' description='描述'></Flow.Item>
        <Flow.Item index={2} title='标题2' description='描述'></Flow.Item>
      </Flow>
      <div style={{ height: 16 }}></div>
      <Button color="primary" block onClick={next}>next</Button>
    </>
  );
}
