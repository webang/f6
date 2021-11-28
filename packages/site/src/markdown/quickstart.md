### 安装

```bash
npm install f6
```

### 使用

```jsx
import React from 'react;
import ReactDOM from 'react-dom';

import { Button } from 'f6';

const App = () => {
  return (
    <Button>按钮</Button>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
```