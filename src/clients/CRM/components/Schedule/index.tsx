import React, { useCallback, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

import { Cell } from './Cell';

// {
//   "id": 2,
//   "start": "2020-07-01",
//   "end": "2020-07-03",
//   "room": {
//   "id": 2
// },
//   "order": {
//   "id": 2,
//     "status": "NOT_PAY"
// }
// }

// const month от 0 до 11
import { Container, DaysColumn, SView, SText, DayCell, RoomColumn, RoomName } from './styles';
import { STATUSES_CALENDAR_CELLS } from 'constants/index';
// import 'react-popper-tooltip/dist/styles.css';

const daysInMonth = dayjs().month(0).daysInMonth();
const arrayDays = [...Array(daysInMonth).keys()];

import data from '../../Pages/Calendar/ScheduleTable/crm_calendar.json';

const { rooms, orders } = data;

const month = dayjs('2020-07-25').format('M');

const TEST_DATA = {
  1: [
    { day: 1, order: {}, status: '' },
    { day: 2, order: {}, status: '' },
    { day: 3, order: {}, status: '' },
  ],
  2: [
    { day: 1, order: {}, status: '' },
    { day: 2, order: {}, status: '' },
    { day: 3, order: {}, status: '' },
  ],
};

const result = {};

rooms.forEach((item) => {
  const cells = Array(daysInMonth)
    .fill({})
    .map((item, index) => ({ day: index + 1, status: STATUSES_CALENDAR_CELLS.FREE }));
  //@ts-ignore
  result[item.id] = cells;
});

// console.log(result);

// const cells = Array(daysInMonth)
//   .fill({})
//   .map((item, index) => ({ day: index + 1, status: 'FREE'}));

orders.forEach((order) => {
  const startDay = Number(dayjs(order.start).format('D'));
  const endDay = Number(dayjs(order.end).format('D'));

  //@ts-ignore
  const currentRoomDays = result[order.room.id];

  // console.log(currentRoomDays);

  //@ts-ignore
  currentRoomDays.forEach((item) => {
    if (item.day >= startDay && item.day <= endDay) {
      // console.log(item);
      //@ts-ignore
      item.status = order.status;
      item.id = order.id;
    }
  });

  // console.log(cells);
  // cells.forEach((cell) => {
  //   //@ts-ignore
  //   // console.log(startDay >= cell.day);
  //   if ((cell.day >= startDay) && (cell.day <= endDay)) {
  //     //@ts-ignore
  //     cell.order = order.order
  //     // console.log(cell.day);
  //   }
  // })
});

console.log(result);

export const Separate = () => {
  return (
    <SView>
      <SText>Дата/Номер</SText>
    </SView>
  );
};

export const Schedule = ({ year, month, getData }) => {
  const [s, setS] = useState([]);

  useEffect(() => {
    const r = getData(year, month);

    console.log(r);
    // setS(r);
  }, []);

  return (
    <Container>
      <DaysColumn>
        <Separate />
        {arrayDays.map((item) => (
          <DayCell key={item}>{item + 1}</DayCell>
        ))}
      </DaysColumn>

      {rooms.map((item) => (
        <RoomColumn key={item.id}>
          <RoomName>{item.name}</RoomName>
          {/*//@ts-ignore*/}
          {result[item.id].map((cell) => (
            <Cell key={cell.day} status={cell.status} />
          ))}
        </RoomColumn>
      ))}
    </Container>
  );
};
