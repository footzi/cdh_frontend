import { useRequest } from 'api';
import { getDaysInMonth } from '../utils/getDaysInMonth';
import { getColumns } from '../utils/getColumns';
import { UseScheduleResult } from '../interfaces';

export const useScheduleData = (month: number, year: number): UseScheduleResult => {
  const { data, isLoading } = useRequest('/schedule');
  const days = getDaysInMonth(month, year);
  const columns = getColumns(data, days);

  return {
    days,
    columns,
    isLoading,
  };
};
