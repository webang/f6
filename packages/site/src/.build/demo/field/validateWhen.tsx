import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <>
      <Field titlePosition="top" title="密码" placeholder="请输入账户" value={value} onChange={(v) => setValue(v)} />
      <Field titlePosition="top" title="账户" placeholder="请输入账户" />
    </>
  );
}
