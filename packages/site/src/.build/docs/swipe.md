<div class="block-panel"><h3>Demos</h3>

```jsx
import { Swipe } from "f6";

const Page = () => {
  return (
    <div>
      <Swipe>
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>
      <div style={{ height: 20 }}></div>
      <Swipe effect="scale" spaceBetween={0}>
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>
      <div style={{ height: 20 }}></div>
      <Swipe direction="vertical" spaceBetween={0}>
        <Swipe.Item>1</Swipe.Item>
        <Swipe.Item>2</Swipe.Item>
        <Swipe.Item>3</Swipe.Item>
      </Swipe>
      <div style={{ height: 200 }}></div>
    </div>
  );
};

export default Page;
```
</div>

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| direction | 布局方向 | `vertical` \| `horzontal` | `horzontal` |
| wrap | 是否换行 | boolean | `true` |
| align | 副轴对其方式 | - | `start` |
| justify | 主轴对其方式 | - | `start` |

```tsx
export interface SpaceProps {
  direction?: 'vertical' | 'horizontal',
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around';
  wrap?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
```