import { formatToBackendDate } from '../formatToBackendDate';

describe('formatToBackendDate', () => {
  it('Возвращает правильную дату в формате YYYY-MM-DD', () => {
    expect(formatToBackendDate('Tue Jul 27 2021 00:00:00 GMT+0300 (Москва, стандартное время')).toBe('2021-07-27');
  });
});
