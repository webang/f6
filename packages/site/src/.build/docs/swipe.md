<div class="block-panel">

<h3>介绍</h3>

`Swipe` 轮播组件。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/swipe/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import React from "react";
import { Swipe, Button, Space, Toast } from "f6";

export default function App() {
  const ref = React.useRef();
  return (
    <div>
      <Swipe
        loop={false}
        style={{ height: `180px`, lineHeight: `180px`, textAlign: "center" }}
        ref={ref}
        onIndexChange={(index) => Toast.show({ message: index })}
      >
        <Swipe.Item onClick={() => Toast.show({ message: `click 1` }) }>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>

      <Space wrap direction="vertical">
        <div />
        <Button block onClick={() => ref.current.slideNext()}>
          next
        </Button>
        <Button block onClick={() => ref.current.slidePrev()}>
          prev
        </Button>
      </Space>
    </div>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/swipe/demo/loop.md>更新此演示代码</a>
        <h3>loop</h3>

```jsx
import React from "react";
import { Swipe, Button, Space, Toast } from "f6";

export default function App() {
  const ref = React.useRef();
  return (
    <>
      <Swipe
        style={{ height: `180px`, lineHeight: `180px`, textAlign: "center" }}
        ref={ref}
        onIndexChange={(index) => Toast.show({ message: index })}
      >
        <Swipe.Item onClick={() => Toast.show({ message: `click 1` }) }>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>

      <Space wrap direction="vertical">
        <div />
        <Button block onClick={() => ref.current.slideNext()}>
          next
        </Button>
        <Button block onClick={() => ref.current.slidePrev()}>
          prev
        </Button>
      </Space>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/swipe/demo/spaceBetween.md>更新此演示代码</a>
        <h3>spaceBetween</h3>

```jsx
import React from "react";
import { Swipe, Button, Space } from "f6";

export default function App() {
  const ref = React.useRef();
  return (
    <>
      <Swipe
        style={{ height: `180px`, lineHeight: `180px`, textAlign: "center" }}
        ref={ref}
        spaceBetween={20}
      >
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>

      <Space wrap direction="vertical">
        <div />
        <Button block onClick={() => ref.current.slideNext()}>
          next
        </Button>
        <Button block onClick={() => ref.current.slidePrev()}>
          prev
        </Button>
      </Space>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/swipe/demo/direction.md>更新此演示代码</a>
        <h3>direction</h3>

```jsx
import React from "react";
import { Swipe, Button, Space } from "f6";

export default function App() {
  const ref = React.useRef();
  return (
    <>
      <Swipe  style={{ height: `180px`, lineHeight: `180px`, textAlign: "center" }} ref={ref} direction="vertical">
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>
      <Space wrap direction="vertical">
        <div />
        <Button block onClick={() => ref.current.slideNext()}>
          next
        </Button>
        <Button block onClick={() => ref.current.slidePrev()}>
          prev
        </Button>
      </Space>
    </>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/swipe/demo/effect.md>更新此演示代码</a>
        <h3>变换效果</h3>

```jsx
import React from "react";
import { Swipe, Button, Space } from "f6";

export default function App() {
  const ref = React.useRef();
  return (
    <>
      <Swipe  style={{ height: `180px`, lineHeight: `180px`, textAlign: "center" }} ref={ref} effect="scale">
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>
      <Space wrap direction="vertical">
        <div />
        <Button block onClick={() => ref.current.slideNext()}>
          next
        </Button>
        <Button block onClick={() => ref.current.slidePrev()}>
          prev
        </Button>
      </Space>
    </>
  );
}
```
</div>
<div class="block-panel">

<h3>API</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| direction | 轮播方向 | `vertical` \| `horzontal` | `horzontal` |
| loop | 循环模式 | `boolean` | `true` |
| autoplay | 自动抡博 | `boolean` | `true` |
| activeIndex | 当前索引 | `number` | `0` |
| delay | 轮播间歇(ms) | `number` | `1000` |
| effect | 轮播滑动效果 | `slide` `scale` | `slide` |
| spaceBetween | 间距 | `number` | `0` |
| width | 宽度 | `string number` | - |
| height | 高度 | `string number` | - |
| onIndexChange | 激活索引变化事件 | `(index: number) => void` | - |

```tsx
export interface SwipeProps {
  direction?: "horizontal" | "vertical";
  loop?: boolean;
  duration?: number;
  activeIndex?: number;
  autoplay?: number;
  delay?: number;
  effect?: "slide" | "scale";
  spaceBetween?: number;
  width?: number;
  height?: number;
  onIndexChange?: (index: number) => void;
}
```
</div>