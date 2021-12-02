import { Cell, Button, Toast } from 'f6';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"文字提示"} link onClick={() => {
        Toast.show({
          message: '请求成功'
        });
      }} />
      <Cell title={"加载提示"} link onClick={() => {
        Toast.show({
          type: 'loading',
          message: 'Loaidng',
        });
      }} />
      <Cell title={"成功提示"} link onClick={() => {
        Toast.show({
          type: 'success',
          message: '请求成功',
        });
      }} />
      <Cell title={"失败提示"} link onClick={() => {
        Toast.show({
          type: 'fail',
          message: '请求失败'
        });
      }} />
      <Cell title={"警告提示"} link onClick={() => {
        Toast.show({
          type: 'warning',
          message: '警告提示'
        });
      }} />
    </Cell.Group>
  )
}
