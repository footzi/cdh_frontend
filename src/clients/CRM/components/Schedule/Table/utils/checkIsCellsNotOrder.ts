import { SelectedCell } from '../../interfaces';

/**
 * Возвращает true если есть хоть 1 ячейка не попорядку
 * @param cells
 */
export const checkIsCellsNotOrder = (cells: SelectedCell[]): boolean => {
  return cells.some((cell, index: number) => cells[index - 1] && cell.dayId - cells[index - 1].dayId > 1);
};
