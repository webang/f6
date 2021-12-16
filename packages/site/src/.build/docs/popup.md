<div class="block-panel"><h3>基础用法</h3>

```jsx
import { Button, Popup, Popover, Cell  } from 'f6';
import { useState } from "react";

export default function App() {
  const [v0, setV0] = useState(false);
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);
  const [v4, setV4] = useState(false);

  return (
    <div style={{ padding: 10 }}>
      <Cell
        title="position"
        value="top"
        onClick={() => setV0((prev) => !prev)}
        link
      />
      <Cell
        title="position"
        value="bottom"
        onClick={() => setV1((prev) => !prev)}
        link
      />
      <Cell
        title="position"
        value="left"
        onClick={() => setV2((prev) => !prev)}
        link
      />
      <Cell
        title="position"
        value="right"
        onClick={() => setV3((prev) => !prev)}
        link
      />
          <Cell
        title="position"
        value="middle"
        onClick={() => setV4((prev) => !prev)}
        link
      />

      <Popup visible={v0}>
        <Cell
          title="单元格"
          value="100"
          onClick={() => setV0(false)}
          link
        />
        <Cell title="单元格" value="100" link />
        <Cell title="单元格" value="100" link />
      </Popup>

      <Popup visible={v1} position="bottom">
        <Cell
          title="单元格"
          value="100"
          onClick={() => setV1(false)}
          link
        />
        <Cell title="单元格" value="100" link />
        <Cell title="单元格" value="100" link />
      </Popup>

      <Popup visible={v2} position="left">
        <Cell
          title="单元格"
          value="100"
          onClick={() => setV2(false)}
          link
        />
        <Cell title="单元格" value="100" link />
        <Cell title="单元格" value="100" link />
      </Popup>

      <Popup visible={v3} position="right">
        <Cell
          title="单元格"
          value="100"
          onClick={() => setV3(false)}
          link
        />
        <Cell title="单元格" value="100" link />
        <Cell title="单元格" value="100" link />
      </Popup>

      <Popup visible={v4} position="middle">
        <Cell
          title="单元格"
          value="100"
          onClick={() => setV4(false)}
          link
        />
        <Cell title="单元格" value="100" link />
        <Cell title="单元格" value="100" link />
      </Popup>
    </div>
  );
}
```
</div>

<div class="block-panel">
<h3> Props</h3>

thi is Props content


</div>
<div class="block-panel">
<h3> API</h3>

this is API content
</div>