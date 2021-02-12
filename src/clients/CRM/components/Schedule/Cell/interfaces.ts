import { STATUSES_ORDER } from 'constants/index';

export interface CellProps {
  status: STATUSES_ORDER.FREE | STATUSES_ORDER.NOT_PAID | STATUSES_ORDER.PAID;
  roomId: number;
  dayId: number;
}
