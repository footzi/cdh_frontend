export const TRANSITION_TIMEOUT = 300;

export const TRANSITION_GROUP_DEFAULT_TIMEOUT = {
  appear: 0,
  enter: 0,
  exit: TRANSITION_TIMEOUT,
};

export enum ROOM_TYPES {
  NORMAL = 'NORMAL',
  LUX = 'LUX',
}

export enum STATUSES_ORDER {
  PAID = 'PAID',
  NOT_PAID = 'NOT_PAID',
  FREE = 'FREE',
}

export const STATUSES_ORDER_TEXT = {
  [STATUSES_ORDER.PAID]: 'Оплачено',
  [STATUSES_ORDER.NOT_PAID]: 'Не оплачено',
};

export const MONTHS_NAMES = {
  1: 'Января',
  2: 'Февраля',
  3: 'Марта',
  4: 'Апреля',
  5: 'Мая',
  6: 'Июня',
  7: 'Июля',
  8: 'Августа',
  9: 'Сентября',
  10: 'Октября',
  11: 'Ноября',
  12: 'Декабря',
};

export const STARTING_DATE_OF_BOOKING = '2021/07/01';
