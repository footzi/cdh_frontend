import { SelectOption } from 'interfaces';

export enum PET_TYPES {
  CAT_MALE = 'CAT_MALE',
  CAT_FEMALE = 'CAT_FEMALE',
}

export const LOCALE_PET_TYPES = {
  [PET_TYPES.CAT_MALE]: 'Кот',
  [PET_TYPES.CAT_FEMALE]: 'Кошка',
};

export const PET_TYPES_OPTIONS: SelectOption[] = [
  { label: LOCALE_PET_TYPES.CAT_MALE, value: PET_TYPES.CAT_MALE },
  { label: LOCALE_PET_TYPES.CAT_FEMALE, value: PET_TYPES.CAT_FEMALE },
];
