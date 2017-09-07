import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import TradePage from '../TradePage/TradePage';
import AboutPage from '../AboutPage/AboutPage';
import CountryPage from '../CountryPage/CountryPage';

export default ({data}) => {
  const countryRoutes = data.map((country) => {
    return <Route path={country.path} component={CountryPage} key={country.name} />
  });

  return (
    <div>
      <Route exact path="/" render={() => <HomePage data={data} />} />
      <Route path="/trade" component={TradePage} />
      <Route path="/about" render={() => <AboutPage data={data} />} />
      {countryRoutes}
    </div>
  );
}
