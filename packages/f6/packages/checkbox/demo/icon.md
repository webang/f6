---
order: 2
title: 自定义图标
---

```jsx
import React from "react";
import Icon from "f6-icons";
import { Checkbox, Cell, Toast } from "f6";

export default function App() {
  const [v, st] = React.useState(false);
  const onChange = (v) =>
    Toast.show({
      message: v ? "checked" : "unchecked",
    });

  const renderIcon = (v) => {
    return v ? <Icon name="checkbox" /> : <Icon name="radio-on" />;
  };

  const radio = (
    <Checkbox icon={renderIcon} onChange={onChange} checked={v}>
      北京
    </Checkbox>
  );

  return (
    <Cell.Group>
      <Cell title="格子" value={radio}></Cell>
    </Cell.Group>
  );
}
```
