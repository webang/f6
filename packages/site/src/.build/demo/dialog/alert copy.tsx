import React from "react";
import { Dialog, Button } from "f6";

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button block onClick={() => setVisible(true)}>基本使用</Button>
      <Dialog
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        visible={visible}
        title="元气"
        message="山有木兮木有枝，心悦君兮君不知。"
      />
    </>
  );
}
