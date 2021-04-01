import { COLORS } from 'colors';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.LIGHT_GREY};
  position: relative;
  margin-bottom: 2px;
  margin-right: 2px;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${COLORS.MIDDLE_GREY};
    clip-path: polygon(100% 100%, 0 0, 0 100%);
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Text = styled.span`
  font-size: 12px;
  color: ${COLORS.BLACK};
  position: relative;
  z-index: 2;
`;
