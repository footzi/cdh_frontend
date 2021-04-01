import rooms from 'data/rooms.json';
import dayjs from 'dayjs';

import { UsePrePriceProps } from '../interfaces';

export const usePrePrice = ({ startDate, endDate, roomId }: UsePrePriceProps): number | null => {
  if (startDate && endDate && roomId) {
    const days = dayjs(endDate).diff(startDate, 'days');
    const currentRoom = Object.values(rooms).find((item) => item.id === roomId);
    const price = currentRoom ? currentRoom.price : 0;

    return days * price;
  } else {
    return null;
  }
};
