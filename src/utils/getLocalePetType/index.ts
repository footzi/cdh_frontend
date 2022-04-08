/**
 * Возвращает русифицированый тип животного
 *
 * @param {PET_TYPES} type - тип животного
 */
import { LOCALE_PET_TYPES, PET_TYPES } from 'constants/petTypes';

export const getLocalePetType = (type: PET_TYPES): string => {
  return LOCALE_PET_TYPES[type] ?? 'Тип неизвестен';
};
