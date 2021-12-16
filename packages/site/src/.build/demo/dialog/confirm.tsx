import React from 'react';
import { Dialog, Button, Toast } from "f6";

const alertDefault = async () => {
  const res = await Dialog.alert({
    title: 'message',
    message: 'hello world'
  });
  Toast.show({ message: res })
}

const alertWithOnOk = async () => {
  const res = await Dialog.alert({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      // 如果没有返回值，则返回 ok
      return '你点击了 ok'
    }
  });
  Toast.show({ message: res })
}

const alertWithSyncOnOk = async () => {
  const res = await Dialog.alert({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('😁'), 500)
      })
    }
  });
  Toast.show({ message: res })
}

const alertWithOnClose = async () => {
  const res = await Dialog.alert({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      return '😁'
    },
    onClose: () => {
      return true
    }
  });
  Toast.show({ message: res })
}

export default function App() {
  return (
    <>
      <Button block  onClick={() => alertDefault()}>默认返回 ok</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => alertWithOnOk()}>自定义 onOk 返回值</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => alertWithSyncOnOk()}>是用异步的 onOk</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => alertWithOnClose()}>onClose 控制是否关闭</Button>
    </>
  );
}
