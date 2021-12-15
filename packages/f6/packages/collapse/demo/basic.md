---
order: 0
title: 基本用法
---

```jsx
import { Collapse, Toast } from "f6";

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Collapse defaultOpenKeys={["1"]}>
        <Collapse.Item name="1" title="李白">
          天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。
        </Collapse.Item>
        <Collapse.Item name="2" title="杜甫">
          我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
        </Collapse.Item>
        <Collapse.Item name="3" title="苏轼">
          我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
        </Collapse.Item>
      </Collapse>
    </div>
  );
}
```