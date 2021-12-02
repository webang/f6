---
order: 1
title: confirm
---

```jsx
import React from 'react';
import { Dialog, Button } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible((pre) => !pre)}>显示</Button>
      <Dialog
        onOk={(index) => {
          setVisible(false);
        }}
        onCancel={(index) => {
          setVisible(false);
        }}
        visible={visible}
        title="提示"
        message="山有木兮木有枝，心悦君兮君不知。"
      />
    </>
  );
}
```