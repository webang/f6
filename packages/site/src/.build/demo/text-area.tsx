import App0 from './text-area/autosize';
import App1 from './text-area/basic';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'text-area';
  const list = [{
        title: '基本使用',
        element: App0
      },{
        title: '自适应高度',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
