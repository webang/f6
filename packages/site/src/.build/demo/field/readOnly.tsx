import { Field, Toast } from "f6";

export default function () {
  const rules = [
    {
      test: (val: string) => val.length < 3,
      message: "长度不能小于3",
    },
  ];
  return (
    <>
      <Field title="账户" validateOnChange={false} placeholder="blur时检验" rules={rules} />
      <Field title="账户" placeholder="请输入密码" placeholder="blur & change 都检验" rules={rules} />
    </>
  );
}
