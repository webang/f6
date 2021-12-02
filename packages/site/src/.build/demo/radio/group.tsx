import React from 'react';
import { Radio, Cell, Toast } from 'f6';

export default function App() {
  const onChange = (v) => {
    Toast.show({ message: v })
  }
  return (
    <Radio.Group defaultValue="1" onChange={onChange}>
      <Radio value={"1"} >北京</Radio>
      <Radio value={"2"} >深圳</Radio>
    </Radio.Group>
  )
}
