<div class="block-panel"><h3>alert</h3>

```jsx
import React from 'react';
import { Dialog, Button } from "f6";

export default function App() {
  const [visible2, setVisible2] = React.useState(false);
  return (
    <>
      <div>
        <Button onClick={() => setVisible2((pre) => !pre)}>显示</Button>
      </div>
      <Dialog
        showCancelButton={false}
        onOk={(index) => {
          setVisible2(false);
        }}
        onCancel={(index) => {
          setVisible2(false);
        }}
        visible={visible2}
        message="山有木兮木有枝，心悦君兮君不知。"
      />
    </>
  );
}
```
</div>

<div class="block-panel"><h3>confirm</h3>

```jsx
import React from 'react';
import { Dialog, Button } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible((pre) => !pre)}>显示</Button>
      <Dialog
        onOk={(index) => {
          setVisible(false);
        }}
        onCancel={(index) => {
          setVisible(false);
        }}
        visible={visible}
        title="提示"
        message="山有木兮木有枝，心悦君兮君不知。"
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

const showConfirm = () => {
  Dialog.confirm({
    title: 'message',
    message: 'hello world'
  })
};

const showAlert = () => {
  Dialog.alert({
    title: 'message',
    message: 'hello world'
  })
}

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button block type="primary" onClick={() => showConfirm()}>confirm</Button>
      <div style={{height: 10 }}></div>
      <Button block type="primary" onClick={() => showAlert()}>alert</Button>
    </>
  );
}
```
</div>

### Props

thi is Props content

### API

this is API content