import dayjs from 'dayjs';
import { ScheduleResponse } from 'interfaces';
import { Column, Cell } from '../interfaces';

export const getColumns = (data: ScheduleResponse, daysInMonth: Array<number>): Column[] => {
  const rooms = data?.rooms;
  const orders = data?.orders;

  if (!data) {
    return;
  }

  const generateCells = (room): Cell[] => {
    const cells = daysInMonth.map((day) => ({ day, order: { id: null, status: null } }));

    orders.forEach((order) => {
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

  return rooms.map((room) => {
    const column = {};
    column['room'] = room;
    column['cells'] = generateCells(room);

    return column;
  });
};
