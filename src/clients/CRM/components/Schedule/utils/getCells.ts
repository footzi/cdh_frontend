import dayjs from 'dayjs';
import { STATUSES_CALENDAR_CELLS } from 'constants/index';

const DATA = [
  {
    room: {
      id: 1,
      name: '123',
    },
    cells: [{}, {}],
  },
];

export const getCells = (data, daysInMonth: Array<Number>) => {
  const rooms = data?.rooms;
  const orders = data?.orders;
  // console.log(data);
  // const { rooms, orders } = data;

  // const month = dayjs('2020-07-25').format('M');

  // rooms.forEach((room) => {
  //   room.
  // })

  if (!data) {
    return;
  }

  const columns = rooms.map((room) => {
    const column = {};
    column['room'] = room;
    column['cells'] = daysInMonth.map((item, index) => ({ day: index + 1, status: STATUSES_CALENDAR_CELLS.FREE }));

    return column;
  });

  console.log(columns);

  return  columns;
  // const daysInMonth = dayjs().month(0).daysInMonth();
  // const arrayDays = [...Array(daysInMonth).keys()];
  // const result = {};
  // rooms.forEach((item) => {
  //   const cells = Array(daysInMonth)
  //     .fill({})
  //     .map((item, index) => ({ day: index + 1, status: STATUSES_CALENDAR_CELLS.FREE }));
  //   //@ts-ignore
  //   result[item.id] = cells;
  // });
  // orders.forEach((order) => {
  //   const startDay = Number(dayjs(order.start).format('D'));
  //   const endDay = Number(dayjs(order.end).format('D'));

  //   //@ts-ignore
  //   const currentRoomDays = result[order.room.id];

  //   //@ts-ignore
  //   currentRoomDays.forEach((item) => {
  //     if (item.day >= startDay && item.day <= endDay) {
  //       // console.log(item);
  //       //@ts-ignore
  //       item.status = order.status;
  //       item.id = order.id;
  //     }
  //   });
  // });
  return {
    days: [],
    rooms,
    cells: {},
  };
};
