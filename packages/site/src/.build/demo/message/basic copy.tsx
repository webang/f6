import React from 'react';
import { Button, Overlay, Loading, Message } from 'f6/packages';

const style = {
  marginRight: 10
}

function App() {
  return (
    <>
      <Message type="primary">这是一段默认的普通文字描述</Message>
      <Message type="warning">这是一段默认的普通文字描述</Message>
      <Message type="danger">这是一段默认的普通文字描述</Message>
      <Message type="success">这是一段默认的普通文字描述</Message>
    </>
  )
}

export default App;
