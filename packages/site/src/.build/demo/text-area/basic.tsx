import { Cell, TextArea, Input, Toast } from "f6";

export default function () {
  const rules = [
    {
      test: (val: string) => val.length < 3,
      message: "长度不能小于3",
    },
  ];
  return (
    <div style={{ padding: 10,  background: '#fff' }}>
      <TextArea autoSize placeholder="请输入账户" rules={rules} />
    </div>
  );
}
