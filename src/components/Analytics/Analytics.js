import ReactGA from 'react-ga';

ReactGA.initialize('UA-106127649-1');

export default () => {
  const path = window.location.hash.replace('#', '');

  ReactGA.set({ page: path });
  ReactGA.pageview(path);
  return null;
}
