---
order: 0
title: 基本使用
---

组件式调用。

```jsx
import React from "react";
import { Dialog, Toast, Button } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button block onClick={() => setVisible(true)}>显示弹窗</Button>
      <Dialog
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        onClose={() => {
          Toast.show({ message: '我要走了，毋念' })
        }}
        onClosed={() => {
          Toast.show({ message: '我无了' })
        }}
        visible={visible}
        title="元气"
        content="山有木兮木有枝，心悦君兮君不知。"
      />
    </>
  );
}
```
