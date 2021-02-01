import { STATUSES_CALENDAR_CELLS } from 'constants/index';

export const MOCK_DATA = {
  rooms: [
    {
      id: 1,
      type: 'NORMAL',
      name: 'K1',
    },
    {
      id: 2,
      type: 'LUX',
      name: 'L1',
    },
  ],
  items: [
    {
      day: 1,
      cells: [
        {
          id: 1,
          day: 1,
          date: '7 июля 2021',
          room: {
            id: 1,
            type: 'NORMAL',
            name: 'K1',
          },
          status: STATUSES_CALENDAR_CELLS.FREE,
        },
        {
          id: 1,
          day: 1,
          date: '7 июля 2021',
          room: {
            id: 2,
            type: 'NORMAL',
            name: 'K2',
          },
          status: STATUSES_CALENDAR_CELLS.FREE,
        },
      ],
    },
  ],
};

export const MOCK_DATA_2 = {
  rooms: [
    {
      id: 1,
      type: 'NORMAL',
      name: 'K1',
    },
    {
      id: 2,
      type: 'LUX',
      name: 'L1',
    },
  ],
  items: [
    {
      room: {
        name: 'K1',
      },
      cells: {
        id: 1,
        day: 1,
        date: '7 июля 2021',
        room: {
          id: 1,
          type: 'NORMAL',
          name: 'K1',
        },
        status: STATUSES_CALENDAR_CELLS.FREE,
      },
    },
  ],
};
