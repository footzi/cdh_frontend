import dayjs, { Dayjs } from 'dayjs';

/**
 * Возвращает кол-во дней от даты начала до даты конца
 * @param {Dayjs} startDate - дата начала
 * @param {Dayjs} endDate - дата окончания
 */
export const getCountDays = (startDate: Dayjs, endDate: Dayjs) => {
  return dayjs(endDate).diff(startDate, 'days');
};
