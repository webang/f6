---
order: 0
title: 下拉菜单
---

```jsx
import React from "react";
import { Dialog, Button } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <div>
        <Button onClick={() => setVisible(true)}>显示</Button>
      </div>
      <Dialog
        showCancelButton={false}
        onOk={(index) => {
          setVisible(false)
        }}
        visible={visible}
        message="山有木兮木有枝，心悦君兮君不知。"
      />
    </>
  );
}
```