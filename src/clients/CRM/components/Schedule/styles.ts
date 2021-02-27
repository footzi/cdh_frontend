import styled from 'styled-components';
import { COLORS } from 'colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2px;
  margin-bottom: 10px;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const DaysColumn = styled.div``;

export const DayCell = styled.div`
  width: 100px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${COLORS.BLACK};
  background-color: ${COLORS.MIDDLE_GREY};
  margin-bottom: 2px;
  margin-right: 2px;

  &:last-child {
    margin-bottom: 0;
  }
`;
