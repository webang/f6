<div class="block-panel"><h3>基本用法</h3>

```jsx
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
```
</div>

<div class="block-panel"><h3>加载动画</h3>

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

<div class="block-panel"><h3>清除所有</h3>

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

<div class="block-panel"><h3>持续时长</h3>

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
          position: 'bottom',
          message: '请求成功',
          duration: 1000
        });
      }} />
    </Cell.Group>
  )
}
```
</div>

<div class="block-panel"><h3>提示位置</h3>

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

<div class="block-panel"><h3>内容更新</h3>

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
<h3> Props</h3>

thi is Props content


</div>
<div class="block-panel">
<h3> API</h3>

this is API content
</div>