import { useState } from 'react';
import { TextArea, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <>
      <TextArea title="账户" placeholder="请输入账户" />
    </>
  );
}
