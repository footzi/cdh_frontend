import './index.less';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Form, Input, Table } from 'antd';
import { Loader } from 'components/index';
import { RenderOrder } from 'crm/pages/Orders/interfaces';
import { Order } from 'interfaces';
import React, { useState } from 'react';

import { getColumns } from './constants';
import { OrderDrawer } from './Drawer';
import { useGetAllClients, useGetAllOrders, useGetAllRooms } from './hooks';

export const Orders: React.FC = () => {
  const { isLoading: isLoadingGetOrders, orders, renderOrders } = useGetAllOrders();
  const { isLoading: isLoadingClients, clients } = useGetAllClients();
  const { isLoading: isLoadingRooms, rooms } = useGetAllRooms();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const [editableOrder, setEditableOrder] = useState<Order | null>(null);

  const onEdit = (order: RenderOrder) => {
    const editableOrder = orders.find((item) => item.id === order.key);

    if (editableOrder) {
      setEditableOrder(editableOrder);
      setIsOpenDrawer(true);
    }
  };

  const columns = getColumns(onEdit);

  const handleNewOrder = () => {
    setEditableOrder(null);
    setIsOpenDrawer(true);
  };
  const handleCloseDrawer = () => setIsOpenDrawer(false);

  const isLoading = isLoadingGetOrders || isLoadingClients || isLoadingRooms;

  return (
    <section className="orders">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="orders__controls">
            <Form>
              <Form.Item name="orderId">
                <Input prefix={<SearchOutlined />} placeholder="Номер заказа" />
              </Form.Item>
            </Form>

            <Button type="primary" onClick={handleNewOrder}>
              Создать
            </Button>
          </div>

          {renderOrders.length > 0 && (
            <Table dataSource={renderOrders} columns={columns} pagination={false} className="orders__table" />
          )}

          <OrderDrawer
            isOpen={isOpenDrawer}
            onClose={handleCloseDrawer}
            editableOrder={editableOrder}
            clients={clients}
            rooms={rooms}
          />
        </>
      )}
    </section>
  );
};
