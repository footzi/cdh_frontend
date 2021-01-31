export enum STATUSES_ORDER {
  PAID = 'PAID',
  NOT_PAID = 'NOT_PAID',
}

export const STATUSES_ORDER_TEXT = {
  [STATUSES_ORDER.PAID]: 'Оплачено',
  [STATUSES_ORDER.NOT_PAID]: 'Не оплачено',
};
