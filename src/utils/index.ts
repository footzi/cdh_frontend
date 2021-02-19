import dayjs from 'dayjs';
import { MONTHS_NAMES } from 'constants/index';

/**
 * Возвращает текст даты в виде 15 июля 2021г. из даты 2021-07-15
 */
export const getFullDate = (date: string): string => {
  const dayInstance = dayjs(date);
  const day = dayInstance.get('date');
  const month = dayInstance.get('month') + 1;
  const year = dayInstance.get('year');

  //@ts-ignore
  return `${day} ${MONTHS_NAMES[month]} ${year}г.`;
};

/**
 * Возвращает текст даты в любом формат из чисел
 */
export const getDateFormatFromNumbers = (day: number, month: number, year: number, format: string): string => {
  return dayjs(new Date(year, month, day)).format(format);
};
