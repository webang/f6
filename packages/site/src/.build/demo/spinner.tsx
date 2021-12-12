import App0 from './spinner/basic';
import App1 from './spinner/size';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'spinner';
  const list = [{
        title: '动画类型',
        element: App0
      },{
        title: '自定义大小',
        element: App1
      },];
  return <Demo list={list} title={title}/>;
}
