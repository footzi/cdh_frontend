import React from 'react';
import { Dropdown } from 'CRM/components';
import { YEAR_DROPDOWN_STYLES, MONTH_DROPDOWN_STYLES, ORDER_DROPDOWN_STYLES } from './constants';
import { StatusOrder } from './StatusOrder';
import { STATUSES_ORDER } from 'constants/index';

import dayjs from 'dayjs';

import { STATUSES_CALENDAR_CELLS } from 'constants/index';

import { Schedule } from '../../../components/Schedule';

import { YEARS_AND_MONTHS_SCHEDULE } from './utils/normalize-schedule-data';

const year = '2021 год';

// const month = 'Июль 2021';
const order = 'Заказ № 00278';



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

rooms.forEach((item) => {

  const cells = Array(daysInMonth)
    .fill({})
    .map((item, index) => ({ day: index + 1, status: STATUSES_CALENDAR_CELLS.FREE }));
  //@ts-ignore
  result[item.id] = cells;
})

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
    if ((item.day >= startDay) && (item.day <= endDay)) {
      // console.log(item);
      //@ts-ignore
      item.status = order.status;
      item.id = order.id;
    }
  })

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
})

console.log(result);

export const ScheduleTable: React.FC = () => {

  const getData = (year, month) => {
    return [year, month]
  }

  return (
    <>
      {YEARS_AND_MONTHS_SCHEDULE.map((year) => (
        <Dropdown key={year.number} styles={YEAR_DROPDOWN_STYLES} titleText={year.title} >
          {year.months.map((month) => (
            <Dropdown key={month.number} styles={MONTH_DROPDOWN_STYLES} titleText={month.title}>
              {/*//@ts-ignore*/}
              <Schedule year={year.number} month={month.number} getData={getData}/>
            </Dropdown>
          ))}


        </Dropdown>
      ))}
    </>
  )



  return (
    <>
      <Dropdown styles={YEAR_DROPDOWN_STYLES} titleText={year}>
        <Dropdown styles={MONTH_DROPDOWN_STYLES} titleText={month}>
          <Dropdown
            styles={ORDER_DROPDOWN_STYLES}
            titleText={order}
            rightBlock={<StatusOrder status={STATUSES_ORDER.NOT_PAID} />}>
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown
            styles={ORDER_DROPDOWN_STYLES}
            titleText={order}
            rightBlock={<StatusOrder status={STATUSES_ORDER.PAID} />}>
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order}>
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order}>
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order}>
            <h1>HelloMan</h1>
          </Dropdown>
        </Dropdown>
        <Dropdown styles={MONTH_DROPDOWN_STYLES} titleText={month}>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order}>
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order}>
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order}>
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order}>
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order}>
            <h1>HelloMan</h1>
          </Dropdown>
        </Dropdown>
      </Dropdown>
      <Dropdown styles={YEAR_DROPDOWN_STYLES} titleText={year}>
        <Dropdown styles={MONTH_DROPDOWN_STYLES} titleText={month}>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order}>
            <h1>HelloMan</h1>
          </Dropdown>
        </Dropdown>
      </Dropdown>
    </>
  );
};
