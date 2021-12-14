---
order: 2
title: 函数调用
---

```jsx
import React from 'react';
import { Dialog, Button } from "f6";

const showConfirm = () => {
  Dialog.confirm({
    title: 'message',
    message: 'hello world'
  })
};

const showAlert = () => {
  Dialog.alert({
    title: 'message',
    message: 'hello world'
  })
}

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button block color="primary" onClick={() => showConfirm()}>confirm</Button>
      <div style={{height: 10 }}></div>
      <Button block color="primary" onClick={() => showAlert()}>alert</Button>
    </>
  );
}
```