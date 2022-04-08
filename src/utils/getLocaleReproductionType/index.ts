/**
 * Возвращает русифицирование название типа репродукции
 *
 * @param {PET_REPRODUCTION_TYPES} type - тип репродукции
 */
import { LOCALE_PET_REPRODUCTION_TYPES, PET_REPRODUCTION_TYPES } from 'constants/index';

export const getLocaleReproductionType = (type: PET_REPRODUCTION_TYPES): string => {
  return LOCALE_PET_REPRODUCTION_TYPES[type] ?? 'Неизвестно';
};
