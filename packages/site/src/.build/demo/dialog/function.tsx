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
