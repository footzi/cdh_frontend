import { getDaysInMonth } from '../utils/getDaysInMonth';

describe('getDaysInMonth', () => {
  it('Возвращает правильный массив данных для января', () => {
    const result = getDaysInMonth(1, 2021);
    const expectResult = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
    ];

    expect(result).toStrictEqual(expectResult);
  });

  it('Возвращает правильный массив данных для февраля', () => {
    const result = getDaysInMonth(2, 2021);

    expect(result).toHaveLength(28);
  });

  it('Возвращает правильный массив данных для февраля, если год високосный', () => {
    const result = getDaysInMonth(2, 2024);

    expect(result).toHaveLength(29);
  });

  it('Возвращает правильный массив данных для марта', () => {
    const result = getDaysInMonth(3, 2021);

    expect(result).toHaveLength(31);
  });

  it('Возвращает правильный массив данных для апреля', () => {
    const result = getDaysInMonth(4, 2021);

    expect(result).toHaveLength(30);
  });

  it('Возвращает правильный массив данных для мая', () => {
    const result = getDaysInMonth(5, 2021);

    expect(result).toHaveLength(31);
  });

  it('Возвращает правильный массив данных для июня', () => {
    const result = getDaysInMonth(6, 2021);

    expect(result).toHaveLength(30);
  });

  it('Возвращает правильный массив данных для июля', () => {
    const result = getDaysInMonth(7, 2021);

    expect(result).toHaveLength(31);
  });

  it('Возвращает правильный массив данных для августа', () => {
    const result = getDaysInMonth(8, 2021);

    expect(result).toHaveLength(31);
  });

  it('Возвращает правильный массив данных для сентября', () => {
    const result = getDaysInMonth(9, 2021);

    expect(result).toHaveLength(30);
  });

  it('Возвращает правильный массив данных для октября', () => {
    const result = getDaysInMonth(10, 2021);

    expect(result).toHaveLength(31);
  });

  it('Возвращает правильный массив данных для ноября', () => {
    const result = getDaysInMonth(11, 2021);

    expect(result).toHaveLength(30);
  });

  it('Возвращает правильный массив данных для декабря', () => {
    const result = getDaysInMonth(12, 2021);

    expect(result).toHaveLength(31);
  });
});
