import { Swipe } from "f6";

const Page = () => {
  return (
    <div>
      <Swipe>
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>
      <div style={{ height: 20 }}></div>
      <Swipe effect="scale" spaceBetween={0}>
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>
      <div style={{ height: 20 }}></div>
      <Swipe direction="vertical" spaceBetween={0}>
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>
      <div style={{ height: 200 }}></div>
    </div>
  );
};

export default Page;
