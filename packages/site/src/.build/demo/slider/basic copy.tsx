import { Slider, Toast } from 'f6';

export default function App() {
  return (
    <>
      <Slider left={<span>0</span>} right={<span>100</span>} onChange={(v) => {
        Toast.show({ message: v })
      }}></Slider>
      <div style={{ height: 10 }}></div>
      <Slider></Slider>
      <div style={{ height: 10 }}></div>
      <Slider></Slider>
    </>
  )
}
