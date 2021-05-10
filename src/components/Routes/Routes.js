import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import TradePage from '../TradePage/TradePage';
import AboutPage from '../AboutPage/AboutPage';
import CountryPage from '../CountryPage/CountryPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';


export default ({data}) => {
  const countryRoutes = data.map((country) => {
    return <Route path={country.path} render={() => <CountryPage country={country} />} key={country.name} />
  });

  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <HomePage data={data} />} />
        <Route path="/trade" component={TradePage} />
        <Route path="/about" render={() => <AboutPage data={data} />} />
        {countryRoutes}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
