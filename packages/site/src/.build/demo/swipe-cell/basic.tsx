import { Cell, SwipeCell, Button } from 'f6';

export default function App() {
  return (
    <SwipeCell right={<Button type="primary" style={{borderRadius: 0 }}>删除</Button>}>
      <Cell title="默认按钮" value="100"></Cell>
    </SwipeCell>
  )
}
