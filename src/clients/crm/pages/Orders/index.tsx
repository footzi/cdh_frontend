import './index.less';

import { Spin, Table } from 'antd';
import { Loader } from 'components/index';
import React from 'react';

import { columns } from './constants';
import { useGetAllOrders } from './hooks';

export const Orders: React.FC = () => {
  const { isLoading, orders } = useGetAllOrders();

  return (
    <section className="orders">
      {isLoading && <Loader />}

      {orders.length > 0 && (
        <Table dataSource={orders} columns={columns} pagination={false} className="orders__table" />
      )}
    </section>
  );
};
