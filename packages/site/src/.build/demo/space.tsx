import App0 from './space/basic';
import App1 from './space/direction';
import App2 from './space/wrap';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Space';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '换行',
        element: App1
      },{
        title: '换行',
        element: App2
      },];
  return <Demo list={list} title={title}/>;
}
