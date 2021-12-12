import App0 from './cell/basic';
import App1 from './cell/border';
import App2 from './cell/group';
import App3 from './cell/icon';
import App4 from './cell/label';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'cell';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '底部边框',
        element: App1
      },{
        title: '展示图标',
        element: App2
      },{
        title: '使用分组',
        element: App3
      },{
        title: '长副标题',
        element: App4
      },];
  return <Demo list={list} title={title}/>;
}
