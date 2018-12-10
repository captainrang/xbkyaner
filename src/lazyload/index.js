import Loadable from 'react-loadable';
import { Loading } from './Loading';

const lazyLoad = (component) => {
  return Loadable({
    loader: () => component,
    loading: Loading,
    delay: 300
  });
}

export default lazyLoad;