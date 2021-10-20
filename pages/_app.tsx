import 'flag-icon-css/css/flag-icon.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'leaflet/dist/leaflet.css';
import type { AppProps } from 'next/app';
import 'reset-css';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
