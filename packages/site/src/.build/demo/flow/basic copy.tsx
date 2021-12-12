import { Cell, Flow, Field, Toast, Button } from "f6";

const button = (
  <Button size="mini" type="primary">
    详情
  </Button>
);

export default function () {
  const rules = [
    {
      test: (val: string) => val.length < 3,
      message: "长度不能小于3",
    },
  ];
  return (
    <>
      <Flow current={1}>
        <Flow.Item index={0} title='标题1' description='描述'></Flow.Item>
        <Flow.Item index={1} title='标题2' description='描述'></Flow.Item>
        <Flow.Item index={2} title='标题2' description='描述'></Flow.Item>
      </Flow>
      <div style={{ height: 16 }}></div>
    </>
  );
}
