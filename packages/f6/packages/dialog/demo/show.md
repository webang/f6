---
order: 1
title: Dialog.show
---

```jsx
import React from "react";
import { Dialog, Button, Toast } from "f6";

const showBasic = () => {
  const res = Dialog.show({
    title: "惊喜",
    content: "新时代农民工又一次胜利了 ✌️",
    onClose: () => true,
  });
};

export default function App() {
  return (
    <Button block onClick={() => showBasic()}>
      简单使用
    </Button>
  );
}
```