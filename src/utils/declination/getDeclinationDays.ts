import { getDeclination } from 'utils/declination/index';

/**
 * Возвращает верное склонение для суток
 * @param {number} days - количество дней
 */
export const getDeclinationDays = (days: number): string => {
  return getDeclination(days, ['сутки', 'суток', 'суток']);
};
