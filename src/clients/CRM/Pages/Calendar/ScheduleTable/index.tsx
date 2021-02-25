import React from 'react';
import { Dropdown } from 'CRM/components';
import { Schedule } from 'CRM/components/Schedule';
import { YEAR_DROPDOWN_STYLES, MONTH_DROPDOWN_STYLES, YEARS_AND_MONTHS_SCHEDULE } from './constants';
import { Container } from './styles';

export const ScheduleTable: React.FC = () => (
  <Container>
    {YEARS_AND_MONTHS_SCHEDULE.map((year) => (
      <Dropdown key={year.number} styles={YEAR_DROPDOWN_STYLES} titleText={year.title}>
        {year.months.map((month) => (
          <Dropdown key={month.number} styles={MONTH_DROPDOWN_STYLES} titleText={month.title}>
            <Schedule year={year.number} month={month.number} />
          </Dropdown>
        ))}
      </Dropdown>
    ))}
  </Container>
);
