import { useState } from "react";
import { Cell, Input, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState("");

  return (
    <>
      <Cell titleAlign="top" title="密码">
        <Input
          placeholder="请输入账户"
          value={value}
          onChange={(v) => setValue(v)}
        />
      </Cell>
      <Cell titleAlign="top" title="密码">
        <Input placeholder="请输入账户" />
      </Cell>
    </>
  );
}
