---
order: 2
title: show 函数调用
---

```jsx
import React from "react";
import { Dialog, Button, Toast } from "f6";

const showDefault = () => {
  const res = Dialog.show({
    title: "message",
    message: "hello world",
    onClose: () => true,
  });
};

const forceClose = () => {
  const res = Dialog.show({
    title: "message",
    message: "hello world",
    onClose: () => false,
    onOk: () => {
      res.forceClose();
      Toast.show({ message: "你点击了 ok" });
    },
  });
};

export default function App() {
  return (
    <>
      <Button block onClick={() => showDefault()}>
        简单使用
      </Button>
      <div style={{ height: 10 }}></div>
      <Button block onClick={() => forceClose()}>
        forceClose
      </Button>
    </>
  );
}
```