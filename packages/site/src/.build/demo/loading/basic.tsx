import React from 'react';
import { Button, Space, Overlay, Loading } from 'f6';

function App() {
  return (
    <Space>
      <Loading spinnerType="lines">Loading</Loading>
      <Loading spinnerType="oval">Loading</Loading>
      <Loading spinnerType="crescent">Loading</Loading>
    </Space>
  )
}

export default App;
