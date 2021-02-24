import { checkIsSelectedNotOrder } from '../checkIsSelectedNotOrder';

describe('checkIsSelectedNotOrder', () => {
  it('возвращает правильный результат если выбираемая ячейка не попорядку с начала', () => {
    const selectedCells = [
      { roomId: 1, dayId: 3 },
      { roomId: 1, dayId: 4 },
    ];

    expect(checkIsSelectedNotOrder(selectedCells, 1)).toEqual(true);
  });

  it('возвращает правильный результат если выбираемая ячейка не попорядку с конца', () => {
    const selectedCells = [
      { roomId: 1, dayId: 2 },
      { roomId: 1, dayId: 3 },
    ];

    expect(checkIsSelectedNotOrder(selectedCells, 5)).toEqual(true);
  });

  it('возвращает правильный результат если выбираемая ячейка попорядку с начала', () => {
    const selectedCells = [
      { roomId: 1, dayId: 2 },
      { roomId: 1, dayId: 3 },
    ];

    expect(checkIsSelectedNotOrder(selectedCells, 1)).toEqual(false);
  });

  it('возвращает правильный результат если выбираемая ячейка попорядку с конца', () => {
    const selectedCells = [
      { roomId: 1, dayId: 1 },
      { roomId: 1, dayId: 2 },
    ];

    expect(checkIsSelectedNotOrder(selectedCells, 3)).toEqual(false);
  });
});
