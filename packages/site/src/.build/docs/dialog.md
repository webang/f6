<div class="block-panel"><h3>基本用法</h3>

```jsx
import React from 'react';
import { Dialog, Button } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible((pre) => !pre)}>visible</Button>
      <Dialog
        onOk={(index) => {
          setVisible(false);
        }}
        onCancel={(index) => {
          setVisible(false);
        }}
        visible={visible}
        title="提示"
        message="this is a message"
      />
    </>
  );
}
```
</div>

<div class="block-panel"><h3>函数调用</h3>

```jsx
import React from 'react';
import { Dialog, Button } from "f6";

const show = () => {
  Dialog.confirm({
    title: 'message',
    message: 'hello world'
  })
};

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => show()}>visible</Button>
    </>
  );
}
```
</div>

### Props

thi is Props content

### API

this is API content