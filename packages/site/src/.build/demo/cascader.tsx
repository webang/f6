import App0 from './cascader/alert';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'Cascader';
  const list = [{
        title: 'alert',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
