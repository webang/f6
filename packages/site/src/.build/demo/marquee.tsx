import App0 from './marquee/basic';
import App1 from './marquee/height';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'marquee';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '设置高度',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
