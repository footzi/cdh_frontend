import './index.less';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Table } from 'antd';
import { Loader } from 'components/index';
import React, { useState } from 'react';

import { columns } from './constants';
import { OrderDrawer } from './Drawer';
import { useGetAllClients, useGetAllOrders } from './hooks';

export const Orders: React.FC = () => {
  const { isLoading, orders } = useGetAllOrders();
  const { isLoading: isLoadingClients, clients } = useGetAllClients();
  const [isOpenDrawer, setIsOpenDrawer] = useState(true);

  const handleOpenDrawer = () => setIsOpenDrawer(true);
  const handleCloseDrawer = () => setIsOpenDrawer(false);

  return (
    <section className="orders">
      {(isLoading || isLoadingClients) && <Loader />}

      <div className="orders__controls">
        <Form>
          <Form.Item name="orderId">
            <Input prefix={<SearchOutlined />} placeholder="Номер заказа" />
          </Form.Item>
        </Form>

        <Button type="primary" onClick={handleOpenDrawer}>
          Создать
        </Button>
      </div>

      {orders.length > 0 && (
        <Table dataSource={orders} columns={columns} pagination={false} className="orders__table" />
      )}

      <OrderDrawer isOpen={isOpenDrawer} onClose={handleCloseDrawer} clients={clients} />
    </section>
  );
};
