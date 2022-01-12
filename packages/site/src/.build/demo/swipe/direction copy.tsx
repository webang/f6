import React from "react";
import { Swipe, Button, Space } from "f6";

//  <Swipe effect="scale" spaceBetween={0}>
//       <Swipe.Item>1</Swipe.Item>
//       <Swipe.Item>2</Swipe.Item>
//       <Swipe.Item>3</Swipe.Item>
//     </Swipe>
//     <div style={{ height: 20 }}></div>

export default function App() {
  const ref = React.useRef();
  return (
    <>
      <Swipe ref={ref} direction="vertical">
        <Swipe.Item>1</Swipe.Item>
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
    </>
  );
}
