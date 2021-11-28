import App0 from './infinite-scroll/basic';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'InfiniteScroll';
  const list = [{
        title: '基本用法',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
