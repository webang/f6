import React from 'react';
import { Radio, Space, Toast } from 'f6';

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v })
  }
  return (
    <Radio.Group disabled defaultValue="1" onChange={onChange}>
      <Space>
        <Radio value={"1"}>北京</Radio>
        <Radio value={"2"}>深圳</Radio>
      </Space>
    </Radio.Group>
  )
}
