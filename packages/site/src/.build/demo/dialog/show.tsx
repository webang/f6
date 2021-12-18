import React from "react";
import { Dialog, Button, Toast } from "f6";

const showBasic = () => {
  const res = Dialog.show({
    title: "惊喜",
    content: (
      <div>
        <img
          width="100%"
          src="https://img2.baidu.com/it/u=1191421309,3524520139&fm=26&fmt=auto"
        />
        <Button block color="primary" title="立即前往" />
      </div>
    ),
    onClose: () => true,
  });
};

export default function App() {
  return (
    <Button block onClick={() => showBasic()}>
      简单使用
    </Button>
  );
}
