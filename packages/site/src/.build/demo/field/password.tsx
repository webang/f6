import { useState } from 'react';
import { Field, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState('')

  return (
    <Field title="密码" type="textarea" placeholder="请输入密码" />
  );
}
