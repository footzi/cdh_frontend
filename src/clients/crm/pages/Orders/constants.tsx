import { ORDER_STATUSES } from 'constants/orderStatuses';

import { EditOutlined } from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import React from 'react';
import { mapStatusToColor } from 'utils/index';

export const columns = [
  {
    title: '№',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Имя',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Даты прибывания',
    dataIndex: 'dates',
    key: 'dates',
  },
  {
    title: 'Тип номера',
    dataIndex: 'room',
    key: 'address',
  },
  {
    title: 'Телефон',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Питомец',
    dataIndex: 'pet',
    key: 'pet',
    render: (text: string) => (
      <Tooltip title={text}>
        <div className="orders__table-pet">{text}</div>
      </Tooltip>
    ),
  },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (status: ORDER_STATUSES) => (
      <Tag color={mapStatusToColor(status)} key={status}>
        {status.toUpperCase()}
      </Tag>
    ),
  },
  {
    title: '',
    dataIndex: 'actions',
    key: 'actions',
    render: () => (
      <Button type="primary" size="small">
        <EditOutlined />
      </Button>
    ),
  },
];
