import styled from 'styled-components';
import { COLORS } from 'colors';

export const Container = styled.div`
  display: flex;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const DaysColumn = styled.div``;

export const RoomColumn = styled.div`
  margin-right: 2px;
`;

export const DayCell = styled.div`
  width: 130px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${COLORS.BLACK};
  background-color: ${COLORS.MIDDLE_GREY};
  margin-bottom: 2px;
  margin-right: 2px;

  &:last-child {
    margin-bottom: 0;
  }
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
