import React from 'react';
import { Affix, Button } from 'f6';

export default function App() {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div class="test1" ref={ref} style={{ height: '200px', background: '#ccc', overflow: 'scroll', position: 'relative' }}>
      <div style={{ height: '100px' }}></div>
      <Affix top={30} container={() => ref.current}>
        <Button size="sm" shape="round" type="primary">首页</Button>
      </Affix>
      <div style={{ height: '400px' }}></div>
    </div>
  )
}
