import React from 'react';

import { Agenda } from './Agenda';
import { ScheduleTable } from './ScheduleTable';

export const Calendar: React.FC = () => (
  <>
    <Agenda />
    <ScheduleTable />
  </>
);
