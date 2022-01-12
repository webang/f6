import React from "react";
import { Swipe, Button, Space, Toast } from "f6";

export default function App() {
  const ref = React.useRef();
  return (
    <div>
      <Swipe
        loop={false}
        style={{ height: `180px`, lineHeight: `180px`, textAlign: "center" }}
        ref={ref}
        onIndexChange={(index) => Toast.show({ message: index })}
      >
        <Swipe.Item onClick={() => Toast.show({ message: `click 1` }) }>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>

      <Space wrap direction="vertical">
        <div />
        <Button block onClick={() => ref.current.slideNext()}>
          next
        </Button>
        <Button block onClick={() => ref.current.slidePrev()}>
          prev
        </Button>
      </Space>
    </div>
  );
}
