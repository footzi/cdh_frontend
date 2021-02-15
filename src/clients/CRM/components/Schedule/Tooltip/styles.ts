import styled from 'styled-components';
import { TooltipContainerProps } from '../interfaces';
import { COLORS } from 'colors';

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
  height: 55px;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  font-size: 10px;
  line-height: 12px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  padding: 10px 12px;
  //display: flex;
  //align-items: center;
  //justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Date = styled.div``;

export const Room = styled.div`
  span {
    font-weight: 200;
  }
`;

export const Status = styled.div`
  margin-top: 7px;
  color: ${COLORS.DARK_YELLOW};
  text-align: center;

  a {
    font-style: italic;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BookingButton = styled.div``;
