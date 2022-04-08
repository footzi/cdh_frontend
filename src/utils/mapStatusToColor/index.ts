/**
 * Возвращает цвет тэга в зависимости от статуса заказа
 *
 * @param {ORDER_STATUSES} status - статус заказа
 */
import { COLOR_ORDER_STATUSES, ORDER_STATUSES } from 'constants/orderStatuses';

export const mapStatusToColor = (status: ORDER_STATUSES): string => {
  return COLOR_ORDER_STATUSES[status] ?? 'red';
};
