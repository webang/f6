import App0 from './popup/basic';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'popup';
  const list = [{
        title: '基础用法',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
