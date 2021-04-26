import { Preloader } from 'components/Preloader';
import React from 'react';

import { useScheduleData } from './hooks/useScheduleData';
import { ScheduleProps } from './interfaces';
import { Separate } from './Separate';
import { Container, DayCell, DaysColumn, LoaderContainer } from './styles';
import { Table } from './Table';

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

      {columns && <Table columns={columns} year={year} month={month} />}
    </Container>
  );
};
