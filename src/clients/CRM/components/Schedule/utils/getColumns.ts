import dayjs from 'dayjs';
import { STATUSES_CALENDAR_CELLS } from 'constants/index';

export const getColumns = (data, daysInMonth: Array<number>) => {
  const rooms = data?.rooms;
  const orders = data?.orders;

  if (!data) {
    return;
  }

  const generateCells = (room) => {
    const cells = daysInMonth.map((day) => ({ id: 0, day, status: STATUSES_CALENDAR_CELLS.FREE }));

    orders.forEach((order) => {
      if (room.id === order.room.id) {
        const startDay = Number(dayjs(order.start).format('D'));
        const endDay = Number(dayjs(order.end).format('D'));

        cells.forEach((cell) => {
          if (cell.day >= startDay && cell.day <= endDay) {
            cell.status = order.status;
            cell.id = order.id;
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
