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
        type: 'NORMAL',
        name: 'K3',
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
    ],
  },

  expectedColumns: [{ id: 0, day: 1, status: 'FREE' }],
};
