import { ORDER_STATUSES } from 'constants/index';

import { EditOutlined } from '@ant-design/icons';
import { Button, Tag, Tooltip } from 'antd';
import React from 'react';
import { getLocaleOrderStatus, mapStatusToColor } from 'utils/index';

import { RenderOrder } from './interfaces';

export const getColumns = (onEdit: (order: RenderOrder) => void) => {
  return [
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
      render: (dates: string, renderOrder: RenderOrder) => (
        <>
          {dates}
          <span className="orders__table-count-days"> ({renderOrder.countDays})</span>
        </>
      ),
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
      dataIndex: 'pets',
      key: 'pets',
      render: (pets: string) => (
        <Tooltip title={<span dangerouslySetInnerHTML={{ __html: pets }} />}>
          <span dangerouslySetInnerHTML={{ __html: pets }} />
        </Tooltip>
      ),
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (status: ORDER_STATUSES) => (
        <Tag color={mapStatusToColor(status)} key={status}>
          {getLocaleOrderStatus(status)}
        </Tag>
      ),
    },
    {
      title: '',
      dataIndex: 'actions',
      key: 'actions',
      render: (_: unknown, order: RenderOrder) => (
        <Button type="primary" size="small" onClick={() => onEdit(order)}>
          <EditOutlined />
        </Button>
      ),
    },
  ];
};
