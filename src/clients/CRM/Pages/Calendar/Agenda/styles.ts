import styled from 'styled-components';
import { COLORS } from 'colors';
import { STATUSES_ORDER } from 'constants/index';

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
  margin-left: 140px;
`;

export const Item = styled.div`
  margin-right: 60px;
  display: flex;
  align-items: center;
`;

export const Label = styled.div<{ status: string }>`
  width: 53px;
  height: 25px;
  background-color: ${({ status }) =>
    (status === STATUSES_ORDER.PAID && COLORS.LIGHT_RED) ||
    (status === STATUSES_ORDER.NOT_PAID && COLORS.YELLOW) ||
    COLORS.LIGHT_GREEN};
`;

export const Text = styled.div`
  margin-left: 5px;
  font-style: italic;
  font-weight: 300;
  font-size: 12px;
  line-height: 14px;
  color: ${COLORS.BLACK};
`;
