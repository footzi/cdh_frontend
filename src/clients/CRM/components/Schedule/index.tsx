import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Cell } from './Cell';

import { Preloader } from 'common/components/Preloader';
import { useScheduleData } from './hooks/useScheduleData';

// {
//   "id": 2,
//   "start": "2020-07-01",
//   "end": "2020-07-03",
//   "room": {
//   "id": 2
// },
//   "order": {
//   "id": 2,
//     "status": "NOT_PAY"
// }
// }

// const month от 0 до 11
import { Container, DaysColumn, SView, SText, DayCell, RoomColumn, RoomName } from './styles';

// import 'react-popper-tooltip/dist/styles.css';

import data from '../../Pages/Calendar/ScheduleTable/crm_calendar.json';
import styled from 'styled-components';

export const LoaderContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Separate = () => {
  return (
    <SView>
      <SText>Дата/Номер</SText>
    </SView>
  );
};

export const Schedule = ({ year, month }) => {
  const { days, columns, isLoading } = useScheduleData(month, year);

  if (isLoading) {
    return (
      <LoaderContainer>
        <Preloader />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      <DaysColumn>
        <Separate />
        {days.map((day) => (
          <DayCell key={String(day)}>{day}</DayCell>
        ))}
      </DaysColumn>

      {columns.map((column) => (
        <RoomColumn key={column.room.id}>
          <RoomName>{column.room.name}</RoomName>

          {column.cells.map((cell) => (
            <Cell key={cell.day} status={cell.status} />
          ))}
        </RoomColumn>
      ))}
    </Container>
  );
};
