import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <>
      <Field placeholder="请输入账户-受控" value={value} onChange={(v) => setValue(v)} />
      <Field placeholder="请输入密码-非受控" />

      <div style={{ height: 10 }}></div>
      <Button block onClick={() => setValue(v => v + 1)}>++</Button>

      <div style={{ height: 16 }}></div>
      <Field title="账户" placeholder="请输入账户" />
      <Field title="密码" placeholder="请输入密码" />
    </>
  );
}
