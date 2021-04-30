export const daysInMonthMock = [
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

export const mockData1 = {
  data: {
    rooms: [
      {
        id: 1,
        type: 'NORMAL',
        name: 'K1',
      },
      {
        id: 2,
        type: 'NORMAL',
        name: 'K2',
      },
      {
        id: 3,
        type: 'LUX',
        name: 'L1',
      },
    ],

    orders: [
      {
        id: 1,
        start: '2020-07-25',
        end: '2020-07-30',
        room: {
          id: 1,
        },
        status: 'PAID',
      },
      {
        id: 2,
        start: '2020-07-01',
        end: '2020-07-10',
        room: {
          id: 2,
        },
        status: 'NOT_PAID',
      },
      {
        id: 3,
        start: '2020-07-14',
        end: '2020-07-15',
        room: {
          id: 3,
        },
        status: 'PAID',
      },
      {
        id: 4,
        start: '2020-07-01',
        end: '2020-07-02',
        room: {
          id: 1,
        },
        status: 'PAID',
      },
      {
        id: 5,
        start: '2020-07-11',
        end: '2020-07-15',
        room: {
          id: 2,
        },
        status: 'NOT_PAID',
      },
    ],
  },

  expectedData: [
    {
      room: {
        id: 1,
        type: 'NORMAL',
        name: 'K1',
      },
      cells: [
        {
          day: 1,
          order: {
            id: 4,
            start: '2020-07-01',
            end: '2020-07-02',
            room: {
              id: 1,
            },
            status: 'PAID',
          },
        },
        {
          day: 2,
          order: {
            id: 4,
            start: '2020-07-01',
            end: '2020-07-02',
            room: {
              id: 1,
            },
            status: 'PAID',
          },
        },
        {
          day: 3,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-03',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 4,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-04',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 5,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-05',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 6,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-06',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 7,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-07',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 8,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-08',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 9,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-09',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 10,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-10',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 11,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-11',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 12,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-12',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 13,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-13',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 14,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-14',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 15,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-15',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 16,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-16',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 17,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-17',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 18,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-18',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 19,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-19',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 20,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-20',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 21,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-21',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 22,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-22',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 23,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-23',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 24,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-24',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
        {
          day: 25,
          order: {
            id: 1,
            start: '2020-07-25',
            end: '2020-07-30',
            room: {
              id: 1,
            },
            status: 'PAID',
          },
        },
        {
          day: 26,
          order: {
            id: 1,
            start: '2020-07-25',
            end: '2020-07-30',
            room: {
              id: 1,
            },
            status: 'PAID',
          },
        },
        {
          day: 27,
          order: {
            id: 1,
            start: '2020-07-25',
            end: '2020-07-30',
            room: {
              id: 1,
            },
            status: 'PAID',
          },
        },
        {
          day: 28,
          order: {
            id: 1,
            start: '2020-07-25',
            end: '2020-07-30',
            room: {
              id: 1,
            },
            status: 'PAID',
          },
        },
        {
          day: 29,
          order: {
            id: 1,
            start: '2020-07-25',
            end: '2020-07-30',
            room: {
              id: 1,
            },
            status: 'PAID',
          },
        },
        {
          day: 30,
          order: {
            id: 1,
            start: '2020-07-25',
            end: '2020-07-30',
            room: {
              id: 1,
            },
            status: 'PAID',
          },
        },
        {
          day: 31,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-31',
            end: '',
            room: {
              id: 1,
              type: 'NORMAL',
              name: 'K1',
            },
          },
        },
      ],
    },
    {
      room: {
        id: 2,
        type: 'NORMAL',
        name: 'K2',
      },
      cells: [
        {
          day: 1,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 2,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 3,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 4,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 5,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 6,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 7,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 8,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 9,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 10,
          order: {
            id: 2,
            start: '2020-07-01',
            end: '2020-07-10',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 11,
          order: {
            id: 5,
            start: '2020-07-11',
            end: '2020-07-15',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 12,
          order: {
            id: 5,
            start: '2020-07-11',
            end: '2020-07-15',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 13,
          order: {
            id: 5,
            start: '2020-07-11',
            end: '2020-07-15',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 14,
          order: {
            id: 5,
            start: '2020-07-11',
            end: '2020-07-15',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 15,
          order: {
            id: 5,
            start: '2020-07-11',
            end: '2020-07-15',
            room: {
              id: 2,
            },
            status: 'NOT_PAID',
          },
        },
        {
          day: 16,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-16',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 17,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-17',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 18,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-18',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 19,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-19',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 20,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-20',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 21,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-21',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 22,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-22',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 23,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-23',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 24,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-24',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 25,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-25',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 26,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-26',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 27,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-27',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 28,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-28',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 29,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-29',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 30,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-30',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
        {
          day: 31,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-31',
            end: '',
            room: {
              id: 2,
              type: 'NORMAL',
              name: 'K2',
            },
          },
        },
      ],
    },
    {
      room: {
        id: 3,
        type: 'LUX',
        name: 'L1',
      },
      cells: [
        {
          day: 1,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-01',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 2,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-02',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 3,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-03',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 4,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-04',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 5,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-05',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 6,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-06',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 7,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-07',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 8,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-08',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 9,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-09',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 10,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-10',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 11,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-11',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 12,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-12',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 13,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-13',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 14,
          order: {
            id: 3,
            start: '2020-07-14',
            end: '2020-07-15',
            room: {
              id: 3,
            },
            status: 'PAID',
          },
        },
        {
          day: 15,
          order: {
            id: 3,
            start: '2020-07-14',
            end: '2020-07-15',
            room: {
              id: 3,
            },
            status: 'PAID',
          },
        },
        {
          day: 16,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-16',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 17,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-17',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 18,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-18',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 19,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-19',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 20,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-20',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 21,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-21',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 22,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-22',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 23,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-23',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 24,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-24',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 25,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-25',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 26,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-26',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 27,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-27',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 28,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-28',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 29,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-29',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 30,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-30',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
        {
          day: 31,
          order: {
            id: 0,
            status: 'FREE',
            start: '2020-07-31',
            end: '',
            room: {
              id: 3,
              type: 'LUX',
              name: 'L1',
            },
          },
        },
      ],
    },
  ],
};
