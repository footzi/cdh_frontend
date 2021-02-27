import React from 'react';
import dayjs from 'dayjs';
import { Dropdown, Schedule } from 'CRM/components';
import { YEAR_DROPDOWN_STYLES, MONTH_DROPDOWN_STYLES, YEARS_AND_MONTHS_SCHEDULE } from './constants';
import { Container } from './styles';

export const ScheduleTable: React.FC = () => {
  const yearNow = dayjs().get('year');
  const monthNow = 7; //dayjs().get('month') + 1

  return (
    <Container>
      {YEARS_AND_MONTHS_SCHEDULE.map((year) => (
        <Dropdown
          key={year.number}
          styles={YEAR_DROPDOWN_STYLES}
          titleText={year.title}
          isDefaultOpen={year.number === yearNow}>
          {year.months.map((month) => (
            <Dropdown
              key={month.number}
              styles={MONTH_DROPDOWN_STYLES}
              titleText={month.title}
              isDefaultOpen={month.number === monthNow && year.number === yearNow}>
              <Schedule year={year.number} month={month.number} />
            </Dropdown>
          ))}
        </Dropdown>
      ))}
    </Container>
  );
};
