import { CalendarOutlined, UnorderedListOutlined, UserOutlined } from '@ant-design/icons';
import { ROUTES } from 'crm/constants';
import React from 'react';

export const NAVIGATION_MENU = [
  {
    name: 'Календарь',
    href: ROUTES.CALENDAR,
    icon: <CalendarOutlined />,
  },
  {
    name: 'Заказы',
    href: ROUTES.ORDERS,
    icon: <UnorderedListOutlined />,
  },
  {
    name: 'Клиенты',
    href: ROUTES.CLIENTS,
    icon: <UserOutlined />,
  },
];
