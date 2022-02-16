import { LoginForm } from 'components/LoginForm';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Header, Navigation } from './components';
import { ROUTES } from './constants';
import { Calendar, Orders } from './pages';

export const App: React.FC = () => (
  <div className="root-container">
    <BrowserRouter>
      <Header />
      <Navigation />

      <Routes>
        <Route path={ROUTES.CALENDAR} element={<Calendar />} />
        <Route path={ROUTES.ORDERS} element={<Orders />} />
      </Routes>

      {/*<Orders />*/}
      {/*<LoginForm />*/}
      {/*<Layout>*/}

      {/*<Header />*/}
      {/*<Navigation />*/}

      {/*<Routes>*/}
      {/*  <Route path="/crm" element={<Calendar />} />*/}
      {/*  <Route path="/crm/orders" element={<Orders />} />*/}
      {/*</Routes>*/}
      {/*</Layout>*/}
    </BrowserRouter>
  </div>
);
