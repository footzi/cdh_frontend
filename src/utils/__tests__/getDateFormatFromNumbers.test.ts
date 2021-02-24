import { getDateFormatFromNumbers } from '../getDateFormatFromNumbers';

describe('getDateFormatFromNumbers', () => {
  it('Возвращает правильную дату в формате YYYY-MM-DD', () => {
    expect(getDateFormatFromNumbers(1, 7, 2020, 'YYYY-MM-DD')).toBe('2020-07-01');
  });

  it('Возвращает правильную дату в формате DD-MM-YYYY', () => {
    expect(getDateFormatFromNumbers(31, 12, 2021, 'DD-MM-YYYY')).toBe('31-12-2021');
  });
});
