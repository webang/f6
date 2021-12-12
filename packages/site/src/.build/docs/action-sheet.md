<div class="block-panel"><h3>Demos</h3>

```jsx
const Demo = () => {
  return <div>hello</div>;
};

export default Demo;```
</div>

### Props

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| top | 距离顶部距离 | number | `0` |
| container | 相对偏移的容器 | ```(() => HTMLElement) | Window``` | `window` |
| wrapperStyle | 固钉 style | `(params: { fixed: boolean }) => React.CSSProperties` | - |