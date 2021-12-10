import App0 from './swipe-cell/basic';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Space';
  const list = [{
        title: '基本用法',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
