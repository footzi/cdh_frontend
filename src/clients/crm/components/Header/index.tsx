import './index.less';

import UserOutlined from '@ant-design/icons/UserOutlined';
import { Avatar, Popover } from 'antd';
import { Logo } from 'components/Logo';
import React from 'react';

import { HeaderProps } from './interfaces';
import { LoginContent } from './LoginContent';

export const Header: React.FC<HeaderProps> = ({ user, onLogout }) => (
  <header className="header">
    <div className="header__logo">
      <Logo />
    </div>
    <div className="header__right">
      {user && (
        <Popover content={<LoginContent user={user} onLogout={onLogout} />}>
          <Avatar icon={<UserOutlined />} className="header__avatar" />
        </Popover>
      )}
    </div>
  </header>
);
