import styled from 'styled-components';
import { COLORS } from 'colors';

export const Container = styled.div`
  display: flex;
`;

export const RoomColumn = styled.div`
  margin-right: 2px;
`;

export const RoomName = styled.div`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${COLORS.BLACK};
  background-color: ${COLORS.LIGHT_GREY};
  margin-bottom: 2px;
  text-transform: uppercase;
`;
