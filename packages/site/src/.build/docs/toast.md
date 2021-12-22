<div class="block-panel">

<h3>介绍</h3>

在页面指定位置，展示半透明的弹窗提示，常用于加载提示，操作结果提示等场景，默认使用单例模式，可配置为非单例模式。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/toast/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Cell, Button, Toast } from "f6";

export default function App() {
  return (
    <Cell.Group>
      <Cell
        title={"文字提示"}
        link
        onClick={() => {
          Toast.show({
            message: "请求成功",
          });
        }}
      />
      <Cell
        title={"加载提示"}
        link
        onClick={() => {
          Toast.show({
            type: "loading",
            message: "Loading",
          });
        }}
      />
      <Cell
        title={"成功提示"}
        link
        onClick={() => {
          Toast.show({
            type: "success",
            message: "请求成功",
          });
        }}
      />
      <Cell
        title={"失败提示"}
        link
        onClick={() => {
          Toast.show({
            type: "fail",
            message: "请求失败",
          });
        }}
      />
      <Cell
        title={"警告提示"}
        link
        onClick={() => {
          Toast.show({
            type: "warning",
            message: "警告提示",
          });
        }}
      />
    </Cell.Group>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/toast/demo/duration.md>更新此演示代码</a>
        <h3>持续时长</h3>

```jsx
import { Cell, Button, Toast } from 'f6';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"不主动关闭"} link onClick={() => {
        const ref = Toast.show({
          position: 'middle',
          message: '请求成功',
          duration: 0
        });
        let count = 0
        const t = setInterval(() => {
          count++;
          ref.setContent(count)
          if (count > 10) {
            ref.close();
            clearInterval(t);
          }
        }, 1000)
      }} />
      <Cell title={"一段时间后关闭"} link onClick={() => {
        const ref = Toast.show({
          position: 'top',
          message: '请求成功',
          duration: 1000
        });
      }} />
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/toast/demo/position.md>更新此演示代码</a>
        <h3>提示位置</h3>

```jsx
import { Cell, Button, Toast } from 'f6';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"top"} link onClick={() => {
        Toast.show({
          position: 'top',
          message: '请求成功',
        });
      }} />
      <Cell title={"middle"} link onClick={() => {
        Toast.show({
          position: 'middle',
          message: '请求成功'
        });
      }} />
      <Cell title={"bottom"} link onClick={() => {
        Toast.show({
          position: 'bottom',
          message: '请求成功'
        });
      }} />
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/toast/demo/clear.md>更新此演示代码</a>
        <h3>清除所有</h3>

```jsx
import { Cell, Button, Toast } from 'f6';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"主动清除"} link onClick={() => {
        Toast.clear();
      }} />
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/toast/demo/content.md>更新此演示代码</a>
        <h3>内容更新</h3>

```jsx
import { Cell, Button, Toast } from "f6";

export default function App() {
  return (
    <Cell.Group>
      <Cell
        title={"更新内容"}
        link
        onClick={() => {
          const ref = Toast.show({
            position: "top",
            message: "请求成功",
            duration: 1000,
          });
          setTimeout(() => {
            ref.setContent("我不是我了");
          }, 500);
        }}
      />
    </Cell.Group>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/toast/demo/spinner.md>更新此演示代码</a>
        <h3>加载动画</h3>

```jsx
import { Cell, Button, Toast } from 'f6';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"oval"} link onClick={() => {
        Toast.show({
          type: 'loading',
          spinner: 'oval',
          message: 'Loading',
        });
      }} />
      <Cell title={"lines"} link onClick={() => {
        Toast.show({
          type: 'loading',
          spinner: 'lines',
          message: 'Loading',
        });
      }} />
      <Cell title={"crescent"} link onClick={() => {
        Toast.show({
          type: 'loading',
          spinner: 'crescent',
          message: 'Loading',
        });
      }} />
    </Cell.Group>
  )
}
```
</div>
<div class="block-panel">

<h3>Toast.show</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| type | 提示类型 | `ToastType` | `text` |
| message | 提示内容 | `string` | `''` |
| position | 位置 | `ToastPosition` | - |
| duration | 展示的时长(ms)，当为 `0` 时，不会主动消失 | `number` | `1500` |

```tsx
export type ToastPosition = "top" | "bottom" | "middle";
export type ToastType = "text" | "loading" | "success" | "fail" | "warning";

export interface ToastProps {
  type?: ToastType;
  position?: ToastPosition;
  message: string;
  duration?: number;
  spinner?: SpinnerType;
}
```


`Toast.show` 返回一个引用，用于关闭或者修改内容。

| 属性 | 说明 | 类型 |
| :-  | :- | :- |
| close | 关闭弹窗 | `(force?: boolean) => void` |
| setContent | 设置弹窗内容 | `(message: string) => void` |

```tsx
interface ToastRef {
  close: (force?: boolean) => void;
  setContent: (message: string) => void;
}
```


</div>
<div class="block-panel">

<h3>Toast.clear</h3>
清除所有 toast。


</div>
<div class="block-panel">

<h3>Toast.config</h3>
配置默认属性。
</div>