import App0 from './overlay/basic';
import App1 from './overlay/children';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'overlay';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '嵌入内容',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
