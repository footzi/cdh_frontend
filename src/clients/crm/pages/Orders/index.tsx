import './index.less';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Table } from 'antd';
import { Loader } from 'components/index';
import React from 'react';

import { columns } from './constants';
import { useGetAllOrders } from './hooks';

export const Orders: React.FC = () => {
  const { isLoading, orders } = useGetAllOrders();

  return (
    <section className="orders">
      {isLoading && <Loader />}

      <div className="orders__controls">
        <Form>
          <Form.Item name="orderId">
            <Input prefix={<SearchOutlined />} placeholder="Номер заказа" />
          </Form.Item>
        </Form>

        <Button type="primary">Создать</Button>
      </div>

      {orders.length > 0 && (
        <Table dataSource={orders} columns={columns} pagination={false} className="orders__table" />
      )}
    </section>
  );
};
