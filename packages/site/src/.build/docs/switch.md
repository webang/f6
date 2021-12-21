<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/switch/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Space, Switch } from 'f6';

export default function App() {
  return (
    <Space direction="vertical">
      <Switch></Switch>
      <Switch defaultValue={true}></Switch>
      <Switch disabled></Switch>
      <Switch disabled defaultValue={true}></Switch>
    </Space>
  )
}
```
</div>
<div class="block-panel">

<h3>API</h3>

```tsx
export interface SwitchProps {
  defaultValue?: boolean;
  value?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}
```
</div>