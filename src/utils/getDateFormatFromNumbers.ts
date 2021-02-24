import dayjs from 'dayjs';

/**
 * Возвращает текст даты в любом формат из чисел
 */
export const getDateFormatFromNumbers = (day: number, month: number, year: number, format: string): string => {
  return dayjs(new Date(year, month - 1, day)).format(format);
};
