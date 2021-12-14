---
order: 1
title: 设置标题
---

```jsx
import { Cell, Button, ActionSheet, Toast } from "f6";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const callback = (index: number) => {
    Toast.show({ message: index });
    hide();
  };

  const mButton = (
    <Button size="mini" type="primary" onClick={show}>
      显示
    </Button>
  );

  return (
    <div>
      <Cell title="标题" value={mButton} />
      <ActionSheet
        title="选择图片"
        visible={visible}
        onClose={hide}
        callback={callback}
        actions={[{ name: "相机" }, { name: "相册" }]}
      />
    </div>
  );
}
```
