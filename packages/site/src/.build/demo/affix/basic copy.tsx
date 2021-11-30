import { Affix, Button } from 'f6/packages';

export default function App() {
  return (
    <div style={{ height: '1000px', background: '#ccc' }}>
      <Affix top={20}>
        <Button size="sm" shape="round" type="primary">首页</Button>
      </Affix>
    </div>
  )
}
