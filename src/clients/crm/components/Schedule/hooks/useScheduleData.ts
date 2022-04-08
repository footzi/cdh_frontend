import { ApiConfig, UseQueryGetScheduleRequest, useQuery } from 'api';

import { UseScheduleResult } from '../interfaces';
import { getColumns } from '../utils/getColumns';
import { getDaysInMonth } from '../utils/getDaysInMonth';

export const useScheduleData = (month: number, year: number): UseScheduleResult => {
  // @ts-ignore
  const { data, isLoading } = useQuery({ url: ApiConfig.getSchedule }) as UseQueryGetScheduleRequest;
  const days = getDaysInMonth(month, year);
  const columns = getColumns({ data, days, month, year });

  return {
    days,
    columns,
    isLoading,
  };
};
