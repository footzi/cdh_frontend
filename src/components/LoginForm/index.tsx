import './index.less';

import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import React from 'react';
import InputMask from 'react-input-mask';

export const REGEXP_LOGIN = /^(\+7)?[\s\-]?\(?[0-9][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;

/**
 * Форма авторизации
 */
export const LoginForm = () => {
  const onFinish = () => {
    console.log('login');
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
              <InputMask mask="+7 (999) 999-99-99">{() => <Input />}</InputMask>
            </Form.Item>
            <Form.Item label="Пароль" name="password" rules={[{ required: true, message: 'Введите пароль' }]}>
              <Input.Password />
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
