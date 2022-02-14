export enum ORDER_STATUSES {
  // Забронирован
  BOOKED = 'BOOKED',
  // Оплачен
  PAID = 'PAID',
  // Не оплачен
  NOT_PAID = 'NOT_PAID',
  // Отменен
  CANCELED = 'CANCELED',
  // Завершен
  COMPLETED = 'COMPLETED',
}

export const LOCALE_ORDER_STATUSES = {
  [ORDER_STATUSES.BOOKED]: 'Забронирован',
  [ORDER_STATUSES.PAID]: 'Оплачен',
  [ORDER_STATUSES.NOT_PAID]: 'Не оплачен',
  [ORDER_STATUSES.CANCELED]: 'Отменен',
  [ORDER_STATUSES.COMPLETED]: 'Завершен',
};

export const COLOR_ORDER_STATUSES = {
  [ORDER_STATUSES.BOOKED]: 'cyan',
  [ORDER_STATUSES.PAID]: 'green',
  [ORDER_STATUSES.NOT_PAID]: 'orange',
  [ORDER_STATUSES.CANCELED]: 'red',
  [ORDER_STATUSES.COMPLETED]: 'geekblue',
};
