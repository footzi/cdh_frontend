import { ORDER_STATUSES } from 'constants/index';

import { Pet } from './pet';
import { Room } from './room';
import { Client } from './user';

export interface Order {
  // ID
  id: number;
  // Дата начала
  startDate: string;
  // Дата конца
  endDate: string;
  // Номер
  room: Room;
  // Комментарий к заказу
  comment?: string;
  // Итоговая стоимость
  price: number;
  // Количество дней
  countDays: number;
  // Статус заказа
  status: ORDER_STATUSES;
  // Питомцы
  pets: Pet[];
  // Пользователь
  client: Client;
}
