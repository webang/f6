import { Cell, Field, Toast } from "f6";

export default function () {
  const rules = [
    {
      test: (val: string) => val.length < 3,
      message: "长度不能小于3",
    },
  ];
  return (
    <>
      <Cell title="账户">
        <Field placeholder="请输入账户" rules={rules} />
      </Cell>
      <Cell title="账户">
        <Field
          validateOnBlur={true}
          validateOnChange={false}
          placeholder="blur时检验"
          rules={rules}
        />
      </Cell>
    </>
  );
}
