import { useRequest, ApiPaths } from 'api';
import { getDaysInMonth } from '../utils/getDaysInMonth';
import { getColumns } from '../utils/getColumns';
import { UseScheduleResult, UseScheduleRequest } from '../interfaces';

export const useScheduleData = (month: number, year: number): UseScheduleResult => {
  const { data, isLoading } = useRequest(ApiPaths.getSchedule) as UseScheduleRequest;
  const days = getDaysInMonth(month, year);
  const columns = getColumns({ data, days, month, year });

  return {
    days,
    columns,
    isLoading,
  };
};
