import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Logo } from 'components/Logo';
import { Calendar } from './Pages/Calendar';
import { Orders } from './Pages/Orders';
import { Header, Navigation, NavigationList, NavigationItem } from './styles';

export const App: React.FC = () => {
  return (
    <Router>
      <Header>
        <Logo />
      </Header>
      <Navigation>
        <NavigationList>
          <NavigationItem>
            <Link to="/">Calendar</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/orders">Orders</Link>
          </NavigationItem>
        </NavigationList>
      </Navigation>

      <Switch>
        <Route path="/">
          <Calendar />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
      </Switch>
    </Router>
  );
};
