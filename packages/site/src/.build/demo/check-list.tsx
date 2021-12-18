import App0 from './check-list/basic';
import App1 from './check-list/icon';
import App2 from './check-list/layout';
import App3 from './check-list/multiple';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'check-list';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '设置多选',
        element: App1
      },{
        title: '自定义图标',
        element: App2
      },{
        title: '布局方式',
        element: App3
      },];
  return <Demo list={list} title={title}/>;
}
