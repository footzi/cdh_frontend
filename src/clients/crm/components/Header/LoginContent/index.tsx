import './index.less';

import LogoutOutlined from '@ant-design/icons/LogoutOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import { Avatar, Button, Typography } from 'antd';
import React from 'react';

import { LoginContentProps } from './interfaces';

export const LoginContent: React.FC<LoginContentProps> = ({ user, onLogout }) => {
  return (
    <div className="login-content">
      <Avatar icon={<UserOutlined />} size="large" />
      <Typography.Title level={5} className="login-content__login">
        {user.firstName} {user.lastName}
      </Typography.Title>
      <Typography.Text type="secondary">{user.login}</Typography.Text>

      <Button icon={<LogoutOutlined />} className="login-content__logout" onClick={onLogout}>
        Выйти
      </Button>
    </div>
  );
};
