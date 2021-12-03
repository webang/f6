import App0 from './checkbox/basic';
import App1 from './checkbox/disabled';
import App2 from './checkbox/group';
import App3 from './checkbox/icon';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Checkbox';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '禁用状态',
        element: App1
      },{
        title: '单选组',
        element: App2
      },{
        title: '自定义图标',
        element: App3
      },];
  return <Demo list={list} title={title}/>;
}
