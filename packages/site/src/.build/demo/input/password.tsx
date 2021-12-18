import { useState } from "react";
import { Cell, Input } from "f6";

export default function () {
  const [value, setValue] = useState("hello world");

  return (
    <>
      <Cell title="账户">
        <Input readOnly placeholder="请输入账户" />
      </Cell>
      <Cell title="账户">
        <Input title="账户" value={value} readOnly placeholder="请输入账户" />
      </Cell>
    </>
  );
}
