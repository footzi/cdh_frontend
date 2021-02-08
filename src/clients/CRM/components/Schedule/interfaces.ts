import { STATUSES_ORDER } from 'constants/index';
import { RoomDataResponse } from 'interfaces';

export interface ScheduleProps {
  year: number;
  month: number;
}

export interface Cell {
  day: number;
  order: {
    id?: string;
    status: STATUSES_ORDER.PAID | STATUSES_ORDER.NOT_PAID | null;
  };
}

export interface Column {
  room: RoomDataResponse;
  cells: Cell[];
}

export interface UseScheduleResult {
  days: Array<number>;
  columns: Column[];
  isLoading: boolean;
}
