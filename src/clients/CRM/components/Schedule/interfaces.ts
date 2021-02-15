import { STATUSES_ORDER } from 'constants/index';
import { ScheduleResponse, RoomDataResponse, Maybe } from 'interfaces';
import { UseRequestResult } from 'api';

export interface ScheduleProps {
  year: number;
  month: number;
}

export interface Cell {
  day: number;
  order: {
    id: number;
    status: STATUSES_ORDER.PAID | STATUSES_ORDER.NOT_PAID | STATUSES_ORDER.FREE;
  };
}

export interface Column {
  room: RoomDataResponse;
  cells: Cell[];
}

export interface UseScheduleResult {
  days: Array<number>;
  columns: Maybe<Column[]>;
  isLoading: boolean;
}

export interface UseScheduleRequest extends Omit<UseRequestResult, 'data'> {
  data: ScheduleResponse;
}

export interface CellProps {
  status: STATUSES_ORDER.FREE | STATUSES_ORDER.NOT_PAID | STATUSES_ORDER.PAID;
  roomId: number;
  dayId: number;
}

export interface TooltipCoords {
  x: number;
  y: number;
}

export interface TooltipData {
  roomId: Maybe<number>;
  dayId: Maybe<number>;
  cell: Maybe<Cell>;
}

export interface TooltipProps {
  data: Maybe<TooltipData>;
  coords: TooltipCoords;
}

export interface TooltipContainerProps {
  coords: TooltipCoords;
}
