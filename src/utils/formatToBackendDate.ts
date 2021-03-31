import dayjs from 'dayjs';

/**
 * Форматирует дату в дату которая используется на бэке
 * 'Tue Jul 27 2021 00:00:00 GMT+0300 (Москва, стандартное время' в 2021-07-27
 */
export const formatToBackendDate = (date: string): string => dayjs(date).format('YYYY-MM-DD');
