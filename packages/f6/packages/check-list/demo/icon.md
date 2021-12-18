---
order: 2
title: 自定义图标
---

```jsx
import { Affix, CheckList, Toast } from "f6";
import Icon from 'f6-icons';

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <CheckList
        defaultValue={["B"]}
        onChange={(v) => Toast.show({ message: v })}
        renderIcon={(v) => {
          return v ? <Icon name="checkbox" /> : <Icon name="checkbox-o" />
        }}
      >
        <CheckList.Item value="A">苹果</CheckList.Item>
        <CheckList.Item value="B">香蕉</CheckList.Item>
        <CheckList.Item value="C" disabled>
          蔬菜
        </CheckList.Item>
        <CheckList.Item value="D">橘子</CheckList.Item>
      </CheckList>
    </div>
  );
}
```