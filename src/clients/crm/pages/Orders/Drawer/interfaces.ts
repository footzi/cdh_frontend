import { PET_REPRODUCTION_TYPES } from 'constants/petReproductionTypes';
import { PET_TYPES } from 'constants/petTypes';

import { Maybe } from 'api';
import { Dayjs } from 'dayjs';
import { Client, Order, Room } from 'interfaces';

export interface FieldsData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  dates: [Dayjs, Dayjs];
  pets: {
    name: string;
    age: number;
    type: PET_TYPES;
    reproduction: PET_REPRODUCTION_TYPES;
  }[];
}

export interface OrderDrawerProps {
  editableOrder: Maybe<Order>;
  isOpen: boolean;
  onClose(): void;
  clients: Client[];
  rooms: Room[];
}
