import { COLORS } from 'colors';
import { STATUSES_ORDER } from 'constants/index';
import styled, { css } from 'styled-components';

export const Status = styled.div<{ status: string; isSelected: boolean }>`
  width: 40px;
  height: 25px;
  display: flex;
  background-color: ${COLORS.LIGHT_GREEN};
  margin-bottom: 2px;
  transition: 0.3s background-color, border-color;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: ${({ status }) =>
    (status === STATUSES_ORDER.PAID && COLORS.LIGHT_RED) ||
    (status === STATUSES_ORDER.NOT_PAID && COLORS.YELLOW) ||
    COLORS.LIGHT_GREEN};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ status }) =>
      (status === STATUSES_ORDER.PAID && '#cc9696') || (status === STATUSES_ORDER.NOT_PAID && '#f1e4a1') || '#cadfbe'};
    border-color: ${({ status }) =>
      (status === STATUSES_ORDER.PAID && COLORS.DARK_RED) ||
      (status === STATUSES_ORDER.NOT_PAID && '#C1A200') ||
      COLORS.GREEN};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #cadfbe;
      border-color: ${COLORS.GREEN};
    `}
`;
