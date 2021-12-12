import App0 from './loading/basic';
import App1 from './loading/color';
import App2 from './loading/size';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'loading';
  const list = [{
        title: '基本用法',
        element: App0
      },{
        title: '自定义大小',
        element: App1
      },{
        title: '设置颜色',
        element: App2
      },];
  return <Demo list={list} title={title}/>;
}
