//@ts-nocheck
import './index.less';

import LockOutlined from '@ant-design/icons/LockOutlined';
import UserOutlined from '@ant-design/icons/UserOutlined';
import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import { useLogin } from 'hooks/';
import { User } from 'interfaces';
import React from 'react';
import InputMask from 'react-input-mask';

// eslint-disable-next-line
export const REGEXP_LOGIN = /^(\+7)?[\s\-]?\(?[0-9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;

export interface LoginFormProps {
  setUser(user: User): void;
}

/**
 * Форма авторизации
 */
export const LoginForm: React.FC<LoginFormProps> = ({ setUser }) => {
  const { login } = useLogin(setUser);
  const onFinish = () => {
    console.log('login');
    login();
  };

  return (
    <Row className="login-form">
      <Col span={6}>
        <Card>
          <Typography.Title level={3}>Авторизация</Typography.Title>

          <Form name="loginForm" layout="vertical" autoComplete="off" onFinish={onFinish}>
            <Form.Item
              label="Логин"
              name="login"
              rules={[
                { required: true, message: 'Введите логин' },
                { message: 'Логин введен не верно', pattern: REGEXP_LOGIN },
              ]}>
              <InputMask mask="+7 (999) 999-99-99">{() => <Input prefix={<UserOutlined />} />}</InputMask>
            </Form.Item>
            <Form.Item label="Пароль" name="password" rules={[{ required: true, message: 'Введите пароль' }]}>
              <Input.Password prefix={<LockOutlined />} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};
