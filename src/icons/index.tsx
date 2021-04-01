import React from 'react';

import { IconDefaultProps } from './interfaces';

export const ArrowDownIcon: React.FC<IconDefaultProps> = ({ stroke }) => (
  <svg width="21" height="12" viewBox="0 0 21 12" fill="none">
    <path d="M0.5 11L9.79289 1.70711C10.1834 1.31658 10.8166 1.31658 11.2071 1.70711L20.5 11" stroke={stroke} />
  </svg>
);
