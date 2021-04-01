import { STATUSES_ORDER_TEXT } from 'constants/index';
import React from 'react';

import { StatusOrderProps } from './interface';
import { Status } from './styles';

export const StatusOrder: React.FC<StatusOrderProps> = ({ status }) => (
  <Status status={status}>{STATUSES_ORDER_TEXT[status]}</Status>
);
