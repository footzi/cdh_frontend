import { useRequest } from 'api';
import { getDaysInMonth } from '../utils/getDaysInMonth';
import { getCells } from '../utils/getCells';

interface UseScheduleResult {
  days: Array<Number>;
  columns: any;
  isLoading: boolean;
}

export const useScheduleData = (month: number, year: number): UseScheduleResult => {
  const { data, isLoading } = useRequest('/schedule');
  const days = getDaysInMonth(month, year);
  const columns = getCells(data, days);

  return {
    days,
    columns,
    isLoading,
  };
};
