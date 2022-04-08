export * from './getDeclinationDays';

/**
 * Возвращает верное склонение слова
 *
 * @param {number} number - числовое значение
 * @param {Array[string]} words - массив слов
 */
export const getDeclination = (number: number, words: string[]): string => {
  return words[
    number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
};
