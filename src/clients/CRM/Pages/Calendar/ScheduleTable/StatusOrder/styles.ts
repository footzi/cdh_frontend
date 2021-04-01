import { COLORS } from 'colors';
import { STATUSES_ORDER } from 'constants/index';
import styled from 'styled-components';

import { StatusOrderProps } from './interface';

export const Status = styled.span<StatusOrderProps>`
  font-size: 20px;
  margin-right: 80px;
  text-transform: uppercase;
  color: ${({ status }) =>
    (status === STATUSES_ORDER.PAID && COLORS.GREEN) ||
    (status === STATUSES_ORDER.NOT_PAID && COLORS.DARK_RED) ||
    COLORS.BLACK};
`;
