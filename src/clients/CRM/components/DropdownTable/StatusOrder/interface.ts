import { STATUSES_ORDER } from 'constants/index';

export interface StatusOrderProps {
  status: STATUSES_ORDER.PAID | STATUSES_ORDER.NOT_PAID;
}
