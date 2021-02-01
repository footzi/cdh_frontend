import React, { useCallback, useRef, useState } from 'react';
import dayjs from 'dayjs';
// const month от 0 до 11
import { Container, DaysColumn, SView, SText, DayCell, RoomColumn, RoomName } from './styles';

const daysInMonth = dayjs().month(0).daysInMonth();
const arrayDays = [...Array(daysInMonth).keys()];

export const Separate = () => {
  return (
    <SView>
      <SText>Дата/Номер</SText>
    </SView>
  );
};

export const Schedule = () => {
  return (
    <Container>
      <DaysColumn>
        <Separate />
        {arrayDays.map((item) => (
          <DayCell key={item}>{item + 1}</DayCell>
        ))}
      </DaysColumn>

      <RoomColumn>
        <RoomName>
          K1
        </RoomName>
      </RoomColumn>

    </Container>
  );
};
