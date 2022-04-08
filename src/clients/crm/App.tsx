import { Loader } from 'components/index';
import { LoginForm } from 'components/LoginForm';
import { useGetUser, useLogout } from 'hooks/';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Header, Navigation } from './components';
import { ROUTES } from './constants';
import { removeUser, useCrmContext } from './context';
import { Calendar, Orders } from './pages';

export const App: React.FC = () => {
  const { user } = useCrmContext();
  const { isLoading } = useGetUser();
  const { logout } = useLogout();

  const handleLogout = () => logout();

  return (
    <div className="root-container">
      <BrowserRouter>
        <Header user={user} onLogout={handleLogout} />

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
              <LoginForm />
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
