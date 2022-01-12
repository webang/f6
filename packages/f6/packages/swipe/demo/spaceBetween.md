---
order: 0
title: spaceBetween
---

```jsx
import React from "react";
import { Swipe, Button, Space } from "f6";

export default function App() {
  const ref = React.useRef();
  return (
    <>
      <Swipe
        style={{ height: `180px`, lineHeight: `180px`, textAlign: "center" }}
        ref={ref}
        spaceBetween={20}
      >
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>

      <Space wrap direction="vertical">
        <div />
        <Button block onClick={() => ref.current.slideNext()}>
          next
        </Button>
        <Button block onClick={() => ref.current.slidePrev()}>
          prev
        </Button>
      </Space>
    </>
  );
}
```
