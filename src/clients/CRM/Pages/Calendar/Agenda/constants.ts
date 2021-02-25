import { STATUSES_ORDER } from 'constants/index';

export const AGENDA_ITEMS = [
  {
    status: STATUSES_ORDER.FREE,
    text: 'Свободно',
  },
  {
    status: STATUSES_ORDER.NOT_PAID,
    text: 'Забронировано, не оплачено',
  },
  {
    status: STATUSES_ORDER.PAID,
    text: 'Оплачено',
  },
];
