---
order: 3
title: confirm 函数调用
---

```jsx
import React from "react";
import { Dialog, Space, Button, Toast } from "f6";

const showDefault = async () => {
  const res = await Dialog.confirm({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
  });
  Toast.show({ message: res });
};

const showWithOnOk = async () => {
  const res = await Dialog.confirm({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
    onOk: () => {
      return "你点击了 ok";
    },
    onCancel: () => {
      return "你点击了 cancel";
    },
  });
  Toast.show({ message: res });
};

const showWithSyncOnOk = async () => {
  const res = await Dialog.confirm({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
    onOk: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("onOk 😁"), 500);
      });
    },
    onCancel: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve("onCancel 😁"), 500);
      });
    },
  });
  Toast.show({ message: res });
};

const showWithOnClose = async () => {
  let count = 0;
  const res = await Dialog.confirm({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
    onOk: () => {
      return "😁";
    },
    onClose: () => {
      count++;
      return count > 2;
    },
  });
  Toast.show({ message: res });
};

export default function App() {
  return (
    <Space direction="vertical">
      <Button block onClick={() => showDefault()}>
        简单调用
      </Button>
      <Button block onClick={() => showWithOnOk()}>
        自定义返回
      </Button>
      <Button block onClick={() => showWithSyncOnOk()}>
        异步调用
      </Button>
      <Button block onClick={() => showWithOnClose()}>
        控制是否关闭
      </Button>
    </Space>
  );
}
```