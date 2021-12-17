import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('hello world')

  return (
    <>
      <Field title="账户" disabled placeholder="请输入账户" />
      <Field title="账户" value={value} disabled placeholder="请输入账户" />
    </>
  );
}
