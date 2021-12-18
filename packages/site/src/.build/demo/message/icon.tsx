import React from "react";
import { Space, Toast, Message } from "f6";

function App() {
  return (
    <Space direction="vertical">
      <Message
        onClick={() => {
          Toast.show({ message: "别点我啊 💋" });
        }}
        color="primary"
        link
      >
        这是一段默认的普通文字描述
      </Message>
      <Message type="warning" link>
        这是一段默认的普通文字描述
      </Message>
    </Space>
  );
}

export default App;
