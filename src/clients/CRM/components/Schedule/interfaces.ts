import { STATUSES_ORDER } from 'constants/index';
import { ScheduleResponse, OrderDataResponse, RoomDataResponse, Maybe } from 'interfaces';
import { UseRequestResult } from 'api';

export interface ScheduleProps {
  year: number;
  month: number;
}

export interface CellOrder extends Omit<OrderDataResponse, 'status'> {
  status: STATUSES_ORDER.PAID | STATUSES_ORDER.NOT_PAID | STATUSES_ORDER.FREE;
}

export interface Cell {
  day: number;
  order: CellOrder;
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

export interface GetColumnsProps {
  data: ScheduleResponse;
  days: Array<number>;
  month: number;
  year: number;
}

export interface CellProps {
  status: STATUSES_ORDER.FREE | STATUSES_ORDER.NOT_PAID | STATUSES_ORDER.PAID;
  roomId: number;
  dayId: number;
  isSelected: boolean;
}

export interface NewOrder {
  room: RoomDataResponse;
}

export interface TooltipCoords {
  x: number;
  y: number;
}

export interface TooltipData {
  roomId: Maybe<number>;
  dayId: Maybe<number>;
  start: string;
  end: string;
  cell?: Maybe<Cell>;
  newOrder?: Maybe<NewOrder>;
}

export interface TooltipProps {
  data: Maybe<TooltipData>;
  coords: TooltipCoords;
}

export interface TooltipContainerProps {
  coords: TooltipCoords;
}

export interface SelectedCell {
  roomId: number;
  dayId: number;
}
