import { checkIsCellsNotOrder } from '../checkIsCellsNotOrder';

describe('checkIsCellsNotOrder', () => {
  it('возвращает правильный результат если ячейки не попорядку', () => {
    const selectedCells = [
      { roomId: 1, dayId: 1 },
      { roomId: 1, dayId: 2 },
    ];

    expect(checkIsCellsNotOrder(selectedCells)).toEqual(false);
  });

  it('возвращает правильный результат если ячейки попорядку', () => {
    const selectedCells = [
      { roomId: 1, dayId: 1 },
      { roomId: 1, dayId: 3 },
    ];

    expect(checkIsCellsNotOrder(selectedCells)).toEqual(true);
  });
});
