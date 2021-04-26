import { SelectedCell } from '../../interfaces';

/**
 * Возвращает true если выбираемая ячейка не попорядку с существующими
 * @param cells
 * @param dayId
 */
export const checkIsSelectedNotOrder = (cells: SelectedCell[], dayId: number): boolean => {
  return cells.length > 0 && (cells[0].dayId - dayId > 1 || dayId - cells[cells.length - 1].dayId > 1);
};
