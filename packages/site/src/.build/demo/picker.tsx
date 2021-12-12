import App0 from './picker/basic';
import App1 from './picker/casade';
import App2 from './picker/method';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'picker';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '相关方法',
        element: App1
      },{
        title: '联动效果',
        element: App2
      },];
  return <Demo list={list} title={title}/>;
}
