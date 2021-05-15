import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Country} from '../../assets/data';
import About from '../about';
import CountryPage from '../countryPage';
import Home from '../home';
import NotFound from '../notFound';
import Radio from '../radio';
import Trade from '../trade';
import {Container} from './styles';

interface RoutesProps {
  data: Country[];
}

const Routes = (props: RoutesProps) => {
  const {data} = props;
  const countryRoutes = data.map((country) => {
    return (
      <Route
        path={country.path}
        render={() => <CountryPage country={country} />}
        key={country.name}
      />
    );
  });

  return (
    <Container>
      <Switch>
        <Route exact path='/' render={() => <Home data={data} />} />
        <Route path='/trade' component={Trade} />
        <Route path='/radio' component={Radio} />
        <Route path='/about' render={() => <About data={data} />} />
        {countryRoutes}
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
};

export default Routes;
