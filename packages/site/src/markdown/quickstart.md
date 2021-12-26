### 安装

```bash
npm install f6
```

### 按需加载

#### 1. 安装插件
```bash
npm i babel-plugin-import -D
```

#### 2. 配置插件
在.babelrc 或 babel.config.js 中添加配置：

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "f6",
        "libraryDirectory": "lib/es",
        "style": true
      }
    ]
  ]
}
```

#### 3. 引入组件
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