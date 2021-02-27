import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Navigation, Layout } from './components';
import { Calendar, Orders } from './Pages';

export const App: React.FC = () => (
  <Router>
    <Layout>
      <Header />
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <Calendar />
        </Route>
        <Route path="/orders" exact>
          <Orders />
        </Route>
      </Switch>
    </Layout>
  </Router>
);
