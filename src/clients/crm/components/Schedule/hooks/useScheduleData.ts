import { ApiPaths, UseQueryGetScheduleRequest, useQuery } from 'api';

import { UseScheduleResult } from '../interfaces';
import { getColumns } from '../utils/getColumns';
import { getDaysInMonth } from '../utils/getDaysInMonth';

export const useScheduleData = (month: number, year: number): UseScheduleResult => {
  const { data, isLoading } = useQuery({ url: ApiPaths.getSchedule }) as UseQueryGetScheduleRequest;
  const days = getDaysInMonth(month, year);
  const columns = getColumns({ data, days, month, year });

  return {
    days,
    columns,
    isLoading,
  };
};
