---
order: 0
title: 基本用法
---

```jsx
import { PasswordInput, Toast } from "f6";

export default function App() {
  return (
    <div>
      <PasswordInput
        onChange={(val) => {
          Toast.show({ message: val.join("-") });
        }}
      />
    </div>
  );
}
```