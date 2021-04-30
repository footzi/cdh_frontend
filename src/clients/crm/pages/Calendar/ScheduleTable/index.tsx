import { Dropdown, Schedule } from 'crm/components';
import dayjs from 'dayjs';
import React from 'react';

import { MONTH_DROPDOWN_STYLES, YEARS_AND_MONTHS_SCHEDULE, YEAR_DROPDOWN_STYLES } from './constants';
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
