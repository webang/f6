<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/badge/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Badge, Space } from 'f6';

export default function App() {
  let tempStyle = {
    background: '#eee',
    width: '40px',
    height: '40px',
    display: 'block',
    'border-radius': '8px'
  }
  return (
    <>
      <Space wrap>
        <Badge content='5'>
          <div style={tempStyle}></div>
        </Badge>
        <Badge content='新'>
        <div style={tempStyle}></div>
        </Badge>
        <Badge content='99'>
          <div style={tempStyle}></div>
        </Badge>
      </Space>
      
      
      
    </>
  )
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

thi is Props content


</div>
<div class="block-panel">

<h3>API</h3>

this is API content

</div>