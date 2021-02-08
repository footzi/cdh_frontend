import { useRequest } from 'api';
import { getDaysInMonth } from '../utils/getDaysInMonth';
import { getColumns } from '../utils/getColumns';

interface UseScheduleResult {
  days: Array<number>;
  columns: any;
  isLoading: boolean;
}

export const useScheduleData = (month: number, year: number): UseScheduleResult => {
  const { data, isLoading } = useRequest('/schedule');
  const days = getDaysInMonth(month, year);
  const columns = getColumns(data, days);
  
  console.log('ok');

  return {
    days,
    columns,
    isLoading,
  };
};
