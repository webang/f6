import React from 'react';
import { Dialog, Button, Toast } from "f6";

const showDefault = async () => {
  const res = await Dialog.confirm({
    title: 'message',
    message: 'hello world'
  });
  Toast.show({ message: res })
}

const showWithOnOk = async () => {
  const res = await Dialog.confirm({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      // 如果没有返回值，则返回 ok
      return '你点击了 ok'
    },
    onCancel: () => {
      // 如果没有返回值，则返回 cancel
      return '你点击了 cancel'
    }
  });
  Toast.show({ message: res })
}

const showWithSyncOnOk = async () => {
  const res = await Dialog.confirm({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('onOk 😁'), 500)
      })
    },
    onCancel: () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve('onCancel 😁'), 500)
      })
    }
  });
  Toast.show({ message: res })
}

const showWithOnClose = async () => {
  let count = 0;
  const res = await Dialog.confirm({
    title: 'message',
    message: 'hello world',
    onOk: () => {
      return '😁'
    },
    onClose: () => {
      count++;
      return count > 2
    }
  });
  Toast.show({ message: res })
}

export default function App() {
  return (
    <>
      <Button block  onClick={() => showDefault()}>简单调用</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => showWithOnOk()}>自定义 onOk</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => showWithSyncOnOk()}>异步 onOk</Button>
      <div style={{height: 10 }}></div>
      <Button block  onClick={() => showWithOnClose()}>onClose 控制是否关闭</Button>
    </>
  );
}
