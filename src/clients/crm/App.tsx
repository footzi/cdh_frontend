import { Loader } from 'components/index';
import { LoginForm } from 'components/LoginForm';
import { useGetUser } from 'hooks/';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Header, Navigation } from './components';
import { ROUTES } from './constants';
import { Calendar, Orders } from './pages';

export const App: React.FC = () => {
  const { user, setUser, isLoading } = useGetUser();

  return (
    <div className="root-container">
      <BrowserRouter>
        <Header />

        {isLoading && (
          <div className="app-loader">
            <Loader />
          </div>
        )}

        {!isLoading && (
          <>
            {user ? (
              <>
                <Navigation />
                <Routes>
                  <Route path={ROUTES.CALENDAR} element={<Calendar />} />
                  <Route path={ROUTES.ORDERS} element={<Orders />} />
                </Routes>
              </>
            ) : (
              <LoginForm setUser={setUser} />
            )}
          </>
        )}

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
};
