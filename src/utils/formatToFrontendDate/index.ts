import { DATE_FORMAT } from 'constants/index';

import dayjs from 'dayjs';

/**
 * Форматирует дату с бэка в дату которая используется на фронте
 *  2021-07-01 в 01.07.2021
 */
export const formatToFrontendDate = (date: string): string => dayjs(date).format(DATE_FORMAT);
