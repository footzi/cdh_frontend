import React from 'react';

import { Cell } from './Cell';
import { Separate } from './Separate';
import { ScheduleProps } from './interfaces';
import { Preloader } from 'common/components/Preloader';
import { useScheduleData } from './hooks/useScheduleData';

import { Container, LoaderContainer, DaysColumn, DayCell, RoomColumn, RoomName } from './styles';

export const Schedule: React.FC<ScheduleProps> = ({ year, month }) => {
  const { days, columns, isLoading } = useScheduleData(month, year);

  if (isLoading && !columns) {
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

      {columns &&
        columns.map((column) => (
          <RoomColumn key={column.room.id}>
            <RoomName>{column.room.name}</RoomName>

            {column.cells.map((cell) => (
              <Cell key={cell.day} status={cell.order.status} />
            ))}
          </RoomColumn>
        ))}
    </Container>
  );
};
