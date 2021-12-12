import App0 from './radio/basic';
import App1 from './radio/disabled';
import App2 from './radio/group';
import App3 from './radio/icon';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'radio';
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
