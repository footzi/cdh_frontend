import React from 'react';
import { Dropdown } from 'CRM/components';
import { YEAR_DROPDOWN_STYLES, MONTH_DROPDOWN_STYLES, ORDER_DROPDOWN_STYLES } from './constants';


const year = '2021 год';

const month = 'Июль 2021';
const order = 'Заказ № 00278'
const status = 'ОПЛАЧЕНО'

// Cтатус - рендер пропс
export const DropdownTable: React.FC = () => {
  return (
    <>
      <Dropdown styles={YEAR_DROPDOWN_STYLES} titleText={year}>
        <Dropdown styles={MONTH_DROPDOWN_STYLES} titleText={month}>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order} rightText={status} >
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order} rightText={status} >
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order} rightText={status} >
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order} rightText={status} >
            <h1>HelloMan</h1>
          </Dropdown>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order} rightText={status} >
            <h1>HelloMan</h1>
          </Dropdown>
        </Dropdown>
      </Dropdown>
      <Dropdown styles={YEAR_DROPDOWN_STYLES} titleText={year}>
        <Dropdown styles={MONTH_DROPDOWN_STYLES} titleText={month}>
          <Dropdown styles={ORDER_DROPDOWN_STYLES} titleText={order} rightText={status} >
            <h1>HelloMan</h1>
          </Dropdown>
        </Dropdown>
      </Dropdown>
    </>

  );
};
