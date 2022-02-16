import './index.less';

import { Menu } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NAVIGATION_MENU } from './constants';

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Menu mode="horizontal" className="navigation" selectedKeys={[pathname]}>
      {NAVIGATION_MENU.map(({ href, icon, name }) => (
        <Menu.Item key={href} icon={icon}>
          <Link to={href}>{name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};
