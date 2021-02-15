import React, { useCallback, useState } from 'react';
import { Maybe } from 'interfaces';
import { Cell } from '../Cell';
import { Tooltip } from '../Tooltip';
import { TooltipCoords, TooltipData } from '../interfaces';
import { TableProps } from './interface';
import { Container, RoomColumn, RoomName } from './styles';

export const Table: React.FC<TableProps> = ({ columns }) => {
  const [tooltipData, setTooltipData] = useState<Maybe<TooltipData>>(null);
  const [coords, setCoords] = useState<TooltipCoords>({ x: 0, y: 0 });

  const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const roomId = Number(target.dataset.roomId);
    const dayId = Number(target.dataset.dayId);

    const days = columns.find((column) => column.room.id === roomId);
    const cell = days?.cells.find((day) => day.day === dayId);

    const cors = target.getBoundingClientRect();

    setCoords({
      x: cors.x,
      y: cors.y,
    });

    setTooltipData({
      roomId,
      dayId,
      cell,
    });
    
    console.log(cell);
  }, []);

  const onMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
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

  return (
    <>
      <Container onClick={onClick} onMouseMove={onMouseMove}>
        {columns.map((column) => (
          <RoomColumn key={column.room.id}>
            <RoomName>{column.room.name}</RoomName>

            {column.cells.map((cell) => (
              <Cell roomId={column.room.id} dayId={cell.day} key={cell.day} status={cell.order.status} />
            ))}
          </RoomColumn>
        ))}

        <Tooltip data={tooltipData} coords={coords} />
      </Container>
    </>
  );
};
