import dayjs from 'dayjs';
import { RoomDataResponse, OrderDataResponse, Maybe } from 'interfaces';
import { STATUSES_ORDER } from 'constants/index';
import { getDateFormatFromNumbers } from 'utils/index';
import { Column, Cell, GetColumnsProps } from '../interfaces';

export const getColumns = ({ data, days, month, year }: GetColumnsProps): Maybe<Column[]> => {
  const rooms = data?.rooms;
  const orders = data?.orders;

  if (!data) {
    return;
  }

  const generateCells = (room: RoomDataResponse): Cell[] => {
    const cells = days.map((day) => {
      const start = getDateFormatFromNumbers(day, month - 1, year, 'YYYY-MM-DD');

      return {
        day,
        order: { id: 0, status: STATUSES_ORDER.FREE, start, end: '', room },
      };
    });

    orders.forEach((order: OrderDataResponse) => {
      if (room.id === order.room.id) {
        const startDay = Number(dayjs(order.start).format('D'));
        const endDay = Number(dayjs(order.end).format('D'));

        cells.forEach((cell) => {
          if (cell.day >= startDay && cell.day <= endDay) {
            cell.order = order;
          }
        });
      }
    });

    return cells;
  };

  return rooms.map((room) => ({
    room,
    cells: generateCells(room),
  }));
};
