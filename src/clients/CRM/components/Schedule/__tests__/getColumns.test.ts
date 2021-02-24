import { ScheduleResponse } from 'interfaces';
import { getColumns } from '../utils/getColumns';
import { mockData1, daysInMonthMock } from './mocks';

describe('getColumns', () => {
  it('Возвращает правильный набор данных при вариации 1', () => {
    const props = { data: mockData1.data as ScheduleResponse, days: daysInMonthMock, month: 7, year: 2020 };
    const columns = getColumns(props);

    expect(columns).toEqual(mockData1.expectedData);
  });
});
