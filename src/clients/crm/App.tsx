import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { LoginForm } from 'components/LoginForm';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { Header, Layout } from './components';
import { Calendar, Orders } from './pages';

const Navigation = () => {
  const handleClick = () => {};
  return (
    <Menu onClick={handleClick} mode="horizontal">
      <Menu.Item key="calendar" icon={<MailOutlined />}>
        Календарь
      </Menu.Item>
      <Menu.Item key="orders" icon={<MailOutlined />}>
        Заказы
      </Menu.Item>
      <Menu.Item key="users" icon={<MailOutlined />}>
        Пользователи
      </Menu.Item>
    </Menu>
  );
};

export const App: React.FC = () => (
  <div className="root-container">
    <BrowserRouter>
      <Header />
      <Navigation />
      <Orders />
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
