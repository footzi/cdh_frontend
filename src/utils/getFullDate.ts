import { MONTHS_NAMES } from 'constants/index';
import dayjs from 'dayjs';

/**
 * Возвращает текст даты в виде 15 июля 2021г. из даты 2021-07-15
 */
export const getFullDate = (date: string): string => {
  const dayInstance = dayjs(date, 'DD-MM-YYYY');
  const day = dayInstance.get('date');
  const month = dayInstance.get('month') + 1;
  const year = dayInstance.get('year');

  //@ts-ignore
  return `${day} ${MONTHS_NAMES[month]} ${year}г.`;
};
