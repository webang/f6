import App0 from './uploader/basic';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'uploader';
  const list = [{
        title: '基本使用',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
