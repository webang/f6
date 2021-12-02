import React from 'react';
import { Dialog, Button } from "f6/packages";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible((pre) => !pre)}>confirm</Button>
      <Dialog
        onOk={(index) => {
          setVisible(false);
        }}
        onCancel={(index) => {
          setVisible(false);
        }}
        visible={visible}
        title="提示"
        message="this is a message"
      />
      <div>
        <Button onClick={() => setVisible2((pre) => !pre)}>alert</Button>
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
