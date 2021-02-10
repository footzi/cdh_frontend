import { ScheduleResponse } from 'interfaces';
import { getColumns } from '../utils/getColumns';
import { mockData1, daysInMonthMock } from './mocks';

describe('getColumns', () => {
  it('Возвращает правильный набор данных при вариаци 1', () => {
    const columns = getColumns(mockData1.data as ScheduleResponse, daysInMonthMock);

    expect(columns).toEqual(mockData1.expectedData);
  });
});
