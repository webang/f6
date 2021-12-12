import App0 from './cascader/alert';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'cascader';
  const list = [{
        title: '基本用法',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
