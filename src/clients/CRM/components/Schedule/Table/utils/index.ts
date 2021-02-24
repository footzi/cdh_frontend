import { SelectedCell } from '../../interfaces';

export const checkIsSelectedNotOrder = (cells: SelectedCell[], dayId: number): boolean => {
  return cells.length > 0 && (cells[0].dayId - dayId > 1 || dayId - cells[cells.length - 1].dayId > 1);
};

export const checkIsCellsNotOrder = (cells: SelectedCell[]): boolean => {
  return cells.some((cell, index: number) => cells[index - 1] && cell.dayId - cells[index - 1].dayId > 1);
};
