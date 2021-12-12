<div class="block-panel"><h3>基本用法</h3>

```jsx
import { Grid } from 'f6';
const icon = <img width={16} src="https://avatars.githubusercontent.com/u/34447750?s=40&v=4" />;

export default function App() {
  return (
    <Grid>
      <Grid.Item icon={icon} text="业务"></Grid.Item>
      <Grid.Item icon={icon} text="财务"></Grid.Item>
    </Grid>
  )
}
```
</div>

<div class="block-panel"><h3>边框配置</h3>

```jsx
import { Grid } from 'f6';
const icon = <img width={16} src="https://avatars.githubusercontent.com/u/34447750?s=40&v=4" />;

export default function App() {
  return (
    <>
      <Grid border={true}>
        <Grid.Item icon={icon} text="业务"></Grid.Item>
        <Grid.Item icon={icon} text="财务"></Grid.Item>
      </Grid>
      <div style={{ height: 20 }}></div>
      <Grid border={false}>
        <Grid.Item icon={icon} text="商品"></Grid.Item>
        <Grid.Item icon={icon} text="订单"></Grid.Item>
        <Grid.Item icon={icon} text="物流">主要按钮</Grid.Item>
      </Grid>
    </>
  )
}
```
</div>

<div class="block-panel"><h3>列数配置</h3>

```jsx
import { Grid } from 'f6';
const icon = <img width={16} src="https://avatars.githubusercontent.com/u/34447750?s=40&v=4" />;

export default function App() {
  return (
    <>
      <Grid columnNum={3}>
        <Grid.Item icon={icon} text="业务"></Grid.Item>
        <Grid.Item icon={icon} text="财务"></Grid.Item>
        <Grid.Item icon={icon} text="商品"></Grid.Item>
        <Grid.Item icon={icon} text="订单"></Grid.Item>
        <Grid.Item icon={icon} text="物流"></Grid.Item>
        <Grid.Item icon={icon} text="商品"></Grid.Item>
        <Grid.Item icon={icon} text="订单"></Grid.Item>
        <Grid.Item icon={icon} text="物流"></Grid.Item>
        <Grid.Item icon={icon} text="物流"></Grid.Item>
      </Grid>
    </>
  )
}
```
</div>

### GridProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| border | 是否有边框 | boolean | `true` |
| columnNum | 每行展示的列数 | number | `4` |

### GridItemProps

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| text | 展示的文字 | ReactNode | - |
| icon | 展示的图标 | ReactNode | - |
