import dayjs from 'dayjs';
import { ScheduleResponse, RoomDataResponse, OrderDataResponse, Maybe } from 'interfaces';
import { STATUSES_ORDER } from 'constants/index';
import { Column, Cell } from '../interfaces';

export const getColumns = (data: ScheduleResponse, daysInMonth: Array<number>): Maybe<Column[]> => {
  const rooms = data?.rooms;
  const orders = data?.orders;

  if (!data) {
    return;
  }

  const generateCells = (room: RoomDataResponse): Cell[] => {
    const cells = daysInMonth.map((day) => ({ day, order: { id: 0, status: STATUSES_ORDER.FREE } }));

    orders.forEach((order: OrderDataResponse) => {
      if (room.id === order.room.id) {
        const startDay = Number(dayjs(order.start).format('D'));
        const endDay = Number(dayjs(order.end).format('D'));

        cells.forEach((cell) => {
          if (cell.day >= startDay && cell.day <= endDay) {
            cell.order.id = order.id;
            cell.order.status = order.status;
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
