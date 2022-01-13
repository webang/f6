---
order: 0
title: 基本用法
---

```jsx
import React from "react";
import { NavBar } from "f6";

const style = {
  marginBottom: 10,
};

function App() {
  return (
    <div style={{ marginLeft: "-16px", marginRight: "-16px" }}>
      <NavBar>标题</NavBar>
    </div>
  );
}

export default App;
```