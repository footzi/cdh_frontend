import React from 'react';
import { Status } from './styles';
import { STATUSES_ORDER_TEXT } from 'constants/index';
import { StatusOrderProps } from './interface';

export const StatusOrder: React.FC<StatusOrderProps> = ({ status }) => (
  <Status status={status}>{STATUSES_ORDER_TEXT[status]}</Status>
);
