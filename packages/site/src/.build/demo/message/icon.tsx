import React from 'react';
import { Button, Overlay, Loading, Message } from 'f6/packages';

const style = {
  marginBottom: 10
}

function App() {
  return (
    <>
      <Message type="primary" style={style} link>这是一段默认的普通文字描述</Message>
      <Message type="warning" style={style} link>这是一段默认的普通文字描述</Message>
    </>
  )
}

export default App;
