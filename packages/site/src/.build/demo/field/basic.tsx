import { Cell, Field, Toast, Button } from "f6";

const button = (
  <Button size="mini" color="primary">
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
      <Field placeholder="请输入账户" rules={rules} />
      <Field
        placeholder="请输入密码"
        onFocus={() => {
          Toast.show({ message: "focus", duration: 2000 });
        }}
      />
      <div style={{ height: 16 }}></div>
      <Field label="账户" placeholder="请输入账户" rules={rules} />
      <Field
        label="密码"
        placeholder="请输入密码"
        onFocus={() => {
          Toast.show({ message: "focus", duration: 2000 });
        }}
      />
    </>
  );
}
