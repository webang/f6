import React from 'react';
import { Dialog, Button, Toast } from "f6";

const showConfirm = async () => {
  const res = await Dialog.confirm({
    title: 'message',
    message: 'hello world'
  })
  Toast.show({ message: res })
};

const showAlert = () => {
  Dialog.alert({
    title: 'message',
    message: 'hello world'
  })
}

export default function App() {
  return (
    <>
      <Button block color="primary" onClick={() => showConfirm()}>confirm</Button>
      <div style={{height: 10 }}></div>
      <Button block color="primary" onClick={() => showAlert()}>alert</Button>
    </>
  );
}
