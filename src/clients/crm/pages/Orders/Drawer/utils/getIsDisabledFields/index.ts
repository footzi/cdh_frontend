import { FieldsData } from 'crm/pages/Orders/Drawer/interfaces';

/**
 * Возвращает флаг валидна ли форма
 * @param errors
 * @param valueFields
 */
export const getIsDisabledFields = (errors: any[], valueFields: FieldsData): boolean => {
  const hasErrors = errors.some(({ errors }) => errors.length);

  const isValue =
    valueFields?.firstName && valueFields?.lastName && valueFields?.phone && valueFields?.email && valueFields?.dates;

  const isPetValue =
    valueFields.pets?.length > 0
      ? valueFields.pets.every((item) => {
          return item?.name && item?.age && item?.reproduction && item?.type;
        })
      : false;

  return hasErrors || !isValue || !isPetValue;
};
