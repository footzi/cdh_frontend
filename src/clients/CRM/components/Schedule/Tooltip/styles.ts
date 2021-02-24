import styled from 'styled-components';
import { COLORS } from 'colors';
import { STATUSES_ORDER } from 'constants/index';
import { TooltipContainerProps } from '../interfaces';

export const Container = styled.div<TooltipContainerProps>`
  transition: opacity 0.3s;
  opacity: 0;
  position: fixed;
  top: ${({ coords }) => (coords.y ? `${coords.y - 60}px` : '0')};
  left: ${({ coords }) => (coords.x ? `${coords.x + 20}px` : '0')};
  padding-bottom: 10px;

  &.fade-entered {
    opacity: 1;
  }
`;

export const Content = styled.div`
  width: 170px;
  min-height: 55px;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  font-size: 10px;
  line-height: 12px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  padding: 10px 12px;
`;

export const Header = styled.div<{ isBooking: boolean }>`
  display: ${({ isBooking }) => !isBooking && 'flex'};
  justify-content: space-around;
  text-align: center;
  width: 100%;
`;

export const Date = styled.div`
  margin-bottom: 4px;
`;

export const Room = styled.div`
  span {
    font-weight: 200;
  }
`;

export const Status = styled.div<{ status: string }>`
  margin-top: 3px;
  text-align: center;
  color: ${({ status }) =>
    (status === STATUSES_ORDER.PAID && COLORS.DARK_RED) ||
    (status === STATUSES_ORDER.NOT_PAID && COLORS.DARK_YELLOW) ||
    COLORS.GREEN};

  a {
    font-style: italic;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BookingButton = styled.button`
  text-align: center;
  font-size: 10px;
  font-style: italic;
  color: ${COLORS.ORANGE};
  margin: 8px auto 0 auto;

  &:hover {
    text-decoration: underline;
  }
`;
