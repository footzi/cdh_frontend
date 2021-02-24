import React, { useCallback, useEffect, useState } from 'react';
import { Maybe } from 'interfaces';
import { Cell } from '../Cell';
import { Tooltip } from '../Tooltip';
import { TooltipCoords, TooltipData, SelectedCell } from '../interfaces';
import { TableProps } from './interface';
import { Container, RoomColumn, RoomName } from './styles';
import { STATUSES_ORDER } from 'constants/index';
import { getDateFormatFromNumbers } from 'utils/getDateFormatFromNumbers';
import { checkIsSelectedNotOrder } from './utils/checkIsSelectedNotOrder';
import { checkIsCellsNotOrder } from './utils/checkIsCellsNotOrder';

export const Table: React.FC<TableProps> = ({ columns, year, month }) => {
  const [tooltipData, setTooltipData] = useState<Maybe<TooltipData>>(null);
  const [coords, setCoords] = useState<TooltipCoords>({ x: 0, y: 0 });
  const [selectedCells, setSelectedCells] = useState<SelectedCell[]>([]);

  const onSelected = useCallback(
    (roomId: number, dayId: number, target: HTMLDivElement) => {
      if (!roomId || !dayId) {
        return;
      }

      if (!selectedCells.length) {
        const coords = target.getBoundingClientRect();

        setCoords({
          x: coords.x,
          y: coords.y,
        });
      }

      // если выбрана другая колонка
      const isSelectedInColumn = selectedCells.some((cell) => cell.roomId === roomId);

      if (!isSelectedInColumn && selectedCells.length) {
        return setSelectedCells([]);
      }

      // если выбраная ячейка не попорядку
      const isSelectedNotOrder = checkIsSelectedNotOrder(selectedCells, dayId);

      if (isSelectedNotOrder) {
        return;
      }

      // если выбрали уже выбранную ячейку
      const isSelectedInCurrentCell = selectedCells.some((cell) => cell.roomId === roomId && cell.dayId === dayId);

      if (isSelectedInCurrentCell) {
        const filteredCells = selectedCells.filter((cell) => cell.dayId !== dayId);

        if (!checkIsCellsNotOrder(filteredCells)) {
          setSelectedCells(filteredCells);
        }

        return;
      }

      setSelectedCells((prev) => {
        return [...prev, { roomId, dayId }].sort((a, b) => a.dayId - b.dayId);
      });
    },
    [selectedCells]
  );

  const onUpdateTooltipSelectedCells = useCallback(() => {
    if (selectedCells.length) {
      const roomId = selectedCells[0].roomId;
      const startDay = selectedCells[0].dayId;
      const endDay = selectedCells[selectedCells.length - 1].dayId;

      const room = columns.find((column) => column.room.id === roomId)?.room;

      const start = getDateFormatFromNumbers(startDay, month, year, 'DD-MM-YYYY');
      const end = getDateFormatFromNumbers(endDay, month, year, 'DD-MM-YYYY');

      if (room) {
        setTooltipData({
          roomId,
          dayId: startDay,
          start,
          end,
          newOrder: {
            room,
          },
        });
      }
    }

    if (!selectedCells.length) {
      setTooltipData(null);
    }
  }, [selectedCells]);

  const getIsSelectedCell = useCallback(
    (roomId: number, dayId: number): boolean => {
      return selectedCells.some((cell) => cell.roomId === roomId && cell.dayId === dayId);
    },
    [selectedCells]
  );

  const onClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const target = event.target as HTMLDivElement;
      const roomId = Number(target.dataset.roomId);
      const dayId = Number(target.dataset.dayId);
      const status = target.dataset.status;

      const isSelectedCall = (event.ctrlKey && status === STATUSES_ORDER.FREE) || selectedCells.length;

      if (isSelectedCall) {
        return onSelected(roomId, dayId, target);
      }

      const days = columns.find((column) => column.room.id === roomId);
      const cell = days?.cells.find((day) => day.day === dayId);
      const start = getDateFormatFromNumbers(dayId, month, year, 'YYYY-MM-DD');

      const cors = target.getBoundingClientRect();

      setCoords({
        x: cors.x,
        y: cors.y,
      });

      setTooltipData({
        roomId,
        dayId,
        cell,
        start,
        end: '',
      });
    },
    [selectedCells]
  );

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (selectedCells.length) {
        return;
      }

      if (tooltipData) {
        const target = event.target as HTMLDivElement;
        const roomId = Number(target.dataset.roomId);
        const dayId = Number(target.dataset.dayId);

        const isTooltipTarget = Boolean(target.closest('div[data-id="tooltip"]'));
        const isCurrentCell = roomId === tooltipData.roomId && dayId === tooltipData.dayId;

        if (isTooltipTarget || isCurrentCell) {
          return;
        }

        setTooltipData(null);
      }
    },
    [tooltipData]
  );

  useEffect(() => {
    const hideTooltip = () => {
      if (!selectedCells.length) {
        setTooltipData(null);
      }
    };
    window.addEventListener('scroll', hideTooltip);

    return () => window.removeEventListener('scroll', hideTooltip);
  }, [selectedCells]);

  useEffect(() => {
    onUpdateTooltipSelectedCells();
  }, [selectedCells]);

  return (
    <Container onClick={onClick} onMouseMove={onMouseMove}>
      {columns.map((column) => (
        <RoomColumn key={column.room.id}>
          <RoomName>{column.room.name}</RoomName>

          {column.cells.map((cell) => (
            <Cell
              roomId={column.room.id}
              dayId={cell.day}
              key={cell.day}
              status={cell.order.status}
              isSelected={getIsSelectedCell(column.room.id, cell.day)}
            />
          ))}
        </RoomColumn>
      ))}

      <Tooltip data={tooltipData} coords={coords} />
    </Container>
  );
};
