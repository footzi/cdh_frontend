import { Fields } from '../interfaces';

/**
 * Возвращает флаг валидности формы
 */
export const getIsValid = (fields: Fields): boolean => {
  return Object.entries(fields)
    .filter((field) => field[0] !== 'comment')
    .every((prop) => !!prop[1]);
};
