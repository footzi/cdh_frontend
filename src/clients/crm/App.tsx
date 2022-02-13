import { LoginForm } from 'components/LoginForm';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Header, Layout, Navigation } from './components';
import { Calendar, Orders } from './pages';

export const App: React.FC = () => (
  <BrowserRouter>
    <LoginForm />
    {/*<Layout>*/}

    {/*<Header />*/}
    {/*<Navigation />*/}

    {/*<Routes>*/}
    {/*  <Route path="/crm" element={<Calendar />} />*/}
    {/*  <Route path="/crm/orders" element={<Orders />} />*/}
    {/*</Routes>*/}
    {/*</Layout>*/}
  </BrowserRouter>
);
