import App0 from './popover/basic';
import App1 from './popover/left';
import App2 from './popover/right';
import App3 from './popover/top';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'popover';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '顶部对其',
        element: App1
      },{
        title: '左侧对其',
        element: App2
      },{
        title: '右侧对其',
        element: App3
      },];
  return <Demo list={list} title={title}/>;
}
