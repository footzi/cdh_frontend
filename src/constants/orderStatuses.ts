import { SelectOption } from 'interfaces';

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

export const ORDER_STATUSES_OPTIONS: SelectOption[] = [
  { label: LOCALE_ORDER_STATUSES.BOOKED, value: ORDER_STATUSES.BOOKED },
  { label: LOCALE_ORDER_STATUSES.PAID, value: ORDER_STATUSES.PAID },
  { label: LOCALE_ORDER_STATUSES.NOT_PAID, value: ORDER_STATUSES.NOT_PAID },
  { label: LOCALE_ORDER_STATUSES.CANCELED, value: ORDER_STATUSES.CANCELED },
  { label: LOCALE_ORDER_STATUSES.COMPLETED, value: ORDER_STATUSES.COMPLETED },
];
