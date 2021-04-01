import { ScheduleResponse } from 'api';

import { getColumns } from '../utils/getColumns';
import { daysInMonthMock, mockData1 } from './mocks';

describe('getColumns', () => {
  it('Возвращает правильный набор данных при вариации 1', () => {
    const props = { data: mockData1.data as ScheduleResponse, days: daysInMonthMock, month: 7, year: 2020 };
    const columns = getColumns(props);

    expect(columns).toEqual(mockData1.expectedData);
  });
});
