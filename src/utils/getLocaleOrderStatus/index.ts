/**
 * Возвращает русифицирование название статуса заказа
 *
 * @param {ORDER_STATUSES} status - статус заказа
 */
import { LOCALE_ORDER_STATUSES, ORDER_STATUSES } from 'constants/orderStatuses';

export const getLocaleOrderStatus = (status: ORDER_STATUSES): string => {
  return LOCALE_ORDER_STATUSES[status] ?? 'Статус неизвестен';
};
