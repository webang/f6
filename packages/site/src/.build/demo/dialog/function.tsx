import React from 'react';
import { Dialog, Button } from "f6/packages";

const show = () => {
  Dialog.confirm({
    title: 'message',
    message: 'hello world'
  })
};

export default function App() {
  const [visible, setVisible] = React.useState(false);
  return (
    <>
      <Button onClick={() => show()}>visible</Button>
    </>
  );
}
