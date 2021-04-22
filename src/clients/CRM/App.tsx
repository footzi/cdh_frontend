import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Header, Layout, Navigation } from './components';
import { Calendar, Orders } from './pages';

export const App: React.FC = () => (
  <Router>
    <Layout>
      <Header />
      <Navigation />

      <Switch>
        <Route path="/crm" exact>
          <Calendar />
        </Route>
        <Route path="/crm/orders" exact>
          <Orders />
        </Route>
      </Switch>
    </Layout>
  </Router>
);
