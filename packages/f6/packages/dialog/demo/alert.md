---
order: 0
title: alert
---

```jsx
import React from 'react';
import { Dialog, Button } from "f6";

export default function App() {
  const [visible2, setVisible2] = React.useState(false);
  return (
    <>
      <div>
        <Button onClick={() => setVisible2((pre) => !pre)}>显示</Button>
      </div>
      <Dialog
        showCancelButton={false}
        onOk={(index) => {
          setVisible2(false);
        }}
        onCancel={(index) => {
          setVisible2(false);
        }}
        visible={visible2}
        message="山有木兮木有枝，心悦君兮君不知。"
      />
    </>
  );
}
```