import React from 'react';
import { Status } from './styles';
import { CellProps } from '../interfaces';

export const Cell: React.FC<CellProps> = ({ status, roomId, dayId, isSelected }) => (
  <Status status={status} data-room-id={roomId} data-day-id={dayId} data-status={status} isSelected={isSelected} />
);
