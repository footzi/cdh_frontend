import { Dayjs } from 'dayjs';
import { Room } from 'interfaces';
import { getCountDays } from 'utils/getCountDays';

/**
 * Возващает предварительную стоимость исходя из дат и стоимости номера
 * @param {Dayjs} startDate - дата начала
 * @param {Dayjs} endDate - дата окончания
 * @param {number} roomId - ID выбранного номера
 * @param {Room} rooms - Все номера
 */
export const getPrePrice = (startDate: Dayjs, endDate: Dayjs, roomId: string, rooms: Room[]) => {
  if (startDate && endDate && roomId) {
    const days = getCountDays(startDate, endDate);
    const currentRoom = Object.values(rooms).find((item) => item.id === Number(roomId));
    const price = currentRoom ? currentRoom.price : 0;

    return days * price;
  } else {
    return null;
  }
};
