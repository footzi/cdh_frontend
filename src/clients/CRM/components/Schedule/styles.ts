import styled from 'styled-components';
import { COLORS } from 'colors';



export const Container2 = styled.div``;


export const Container = styled.div`
  display: flex;
`;


export const DaysColumn = styled.div``;
export const RoomColumn = styled.div``;


export const SView = styled.div`
  width: 130px;
  height: 56px;
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
`;

export const SText = styled.span`
  font-size: 14px;
  color: ${COLORS.BLACK};
  position: relative;
  z-index: 2;
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
  margin-right: 2px;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
  }
`;
