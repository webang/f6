import React from 'react';
import { Dialog, Button } from "f6/packages";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => setVisible((pre) => !pre)}>visible</Button>
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
    </>
  );
}
