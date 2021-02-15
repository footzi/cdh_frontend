import React from 'react';
import { Separate } from './Separate';
import { Table } from './Table';
import { ScheduleProps } from './interfaces';
import { Preloader } from 'common/components/Preloader';
import { useScheduleData } from './hooks/useScheduleData';

import { Container, LoaderContainer, DaysColumn, DayCell } from './styles';

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

      {columns && <Table columns={columns} />}
    </Container>
  );
};
