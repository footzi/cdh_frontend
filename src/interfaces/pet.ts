import { PET_REPRODUCTION_TYPES } from 'constants/petReproductionTypes';
import { PET_TYPES } from 'constants/petTypes';

export interface Pet {
  //  ID
  id: number;
  // Кличка
  name: string;
  // Возраст
  age: number;
  // Тип
  type: PET_TYPES;
  // Кастр/Стер
  reproduction: PET_REPRODUCTION_TYPES;
  // Особые отметки
  special?: string;
  // Комментарии
  comments?: string;
}
