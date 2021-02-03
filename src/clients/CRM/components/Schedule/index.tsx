import React, { useCallback, useRef, useState } from 'react';
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
import 'react-popper-tooltip/dist/styles.css';

const daysInMonth = dayjs().month(0).daysInMonth();
const arrayDays = [...Array(daysInMonth).keys()];

import data from './crm_calendar.json';

const { rooms, orders } = data;

const month = dayjs('2020-07-25').format('M');

const TEST_DATA = {
  1: [
    {day: 1, order: {}, status: ""},
    {day: 2, order: {}, status: ""},
    {day: 3, order: {}, status: ""}
  ],
  2: [
    {day: 1, order: {}, status: ""},
    {day: 2, order: {}, status: ""},
    {day: 3, order: {}, status: ""}
  ]
}




const result = {}


const cells = Array(daysInMonth)
  .fill({})
  .map((item, index) => ({ day: index + 1, status: 'FREE'}));

orders.forEach((order) => {
  const startDay = Number(dayjs(order.start).format('D'));
  const endDay = Number(dayjs(order.end).format('D'));

  console.log(cells);
  cells.forEach((cell) => {
    //@ts-ignore
    // console.log(startDay >= cell.day);
    if ((cell.day >= startDay) && (cell.day <= endDay)) {
      //@ts-ignore
      cell.order = order.order
      console.log(cell.day);
    }
  })
})



export const Separate = () => {
  return (
    <SView>
      <SText>Дата/Номер</SText>
    </SView>
  );
};

export const Schedule = () => {
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
          <Cell status={STATUSES_CALENDAR_CELLS.FREE} />
          <Cell status={STATUSES_CALENDAR_CELLS.PAID} />
          <Cell status={STATUSES_CALENDAR_CELLS.NOT_PAID} />
        </RoomColumn>
      ))}
    </Container>
  );
};
