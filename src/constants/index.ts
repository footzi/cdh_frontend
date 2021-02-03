export const TRANSITION_TIMEOUT = 300;

export const TRANSITION_GROUP_DEFAULT_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: TRANSITION_TIMEOUT,
};

export enum STATUSES_ORDER {
  PAID = 'PAID',
  NOT_PAID = 'NOT_PAID',
}

export const STATUSES_ORDER_TEXT = {
  [STATUSES_ORDER.PAID]: 'Оплачено',
  [STATUSES_ORDER.NOT_PAID]: 'Не оплачено',
};

export enum STATUSES_CALENDAR_CELLS {
  FREE = 'FREE',
  PAID = 'PAID',
  NOT_PAID = 'NOT_PAID',
}
