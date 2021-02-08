import styled from 'styled-components';
import { COLORS } from 'colors';
import { STATUSES_ORDER } from 'constants/index';

export const Status = styled.div<{ status: string }>`
  width: 55px;
  height: 33px;
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
`;

export const Tooltip = styled.div`
  width: 225px;
  height: 70px;
  background-color: white;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;
  opacity: 0;
  position: relative;
  z-index: 2;

  &.fade-entered {
    opacity: 1;
  }
`;
