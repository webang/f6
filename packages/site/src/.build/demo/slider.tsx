import App0 from './slider/basic';
import App1 from './slider/slot';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'slider';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '使用插槽',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
