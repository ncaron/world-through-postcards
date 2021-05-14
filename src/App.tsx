import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import {Country} from './assets/data';

interface AppProps {
  data: Country[];
}

const App = (props: AppProps) => {
  const {data} = props;

  return (
    <Router basename='/'>
      <div>
        <Header />
        <Main data={data} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
