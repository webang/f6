<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/collapse/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Collapse, Toast } from "f6";

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Collapse defaultOpenKeys={["1"]}>
        <Collapse.Item name="1" title="李白">
          天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。
        </Collapse.Item>
        <Collapse.Item name="2" title="杜甫">
          我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
        </Collapse.Item>
        <Collapse.Item name="3" title="苏轼">
          我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
        </Collapse.Item>
      </Collapse>
    </div>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/collapse/demo/mutiple.md>更新此演示代码</a>
        <h3>multiple</h3>

```jsx
import { Collapse, Toast } from "f6";

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <Collapse multiple={true} defaultOpenKeys={["1"]}>
        <Collapse.Item name="1" title="李白">
          天接云涛连晓雾，星河欲转千帆舞。仿佛梦魂归帝所。闻天语，殷勤问我归何处。
        </Collapse.Item>
        <Collapse.Item name="2" title="杜甫">
          我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
        </Collapse.Item>
        <Collapse.Item name="3" title="苏轼">
          我报路长嗟日暮，学诗谩有惊人句。九万里风鹏正举。风休住，蓬舟吹取三山去！
        </Collapse.Item>
      </Collapse>
    </div>
  );
}
```
</div>
<div class="block-panel">

<h3>CollapseProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| defaultOpenKeys | 默认打开配置 | `[]string` | `[]` |
| multiple | 是否多个同时打开 | `boolean` | false |

```tsx
export interface CollapseProps {
  className?: string;
  defaultOpenKeys: string[];
  multiple?: boolean;
}
```


</div>
<div class="block-panel">

<h3>CollapseItemProps</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| name | 名称(唯一) | `string` | - |
| title | 标题 | `React.ReactNode` | - |

```tsx
export interface CollapseItemProps {
  className?: string;
  name: string;
  title: React.ReactNode;
}
```
</div>