import React, { useState } from 'react';
import { Maybe } from 'interfaces';
import { Cell } from '../Cell';
import { Tooltip } from '../Tooltip';
import { TooltipCoords, TooltipData } from '../interfaces';
import { TableProps } from './interface';
import { Container, RoomColumn, RoomName } from './styles';

export const Table: React.FC<TableProps> = ({ columns }) => {
  const [tooltipData, setTooltipData] = useState<Maybe<TooltipData>>(null);
  const [coords, setCoords] = useState<TooltipCoords>({ x: 0, y: 0 });

  const onClick = (event: React.SyntheticEvent<HTMLDivElement>) => {
    const roomId = event.currentTarget.dataset.roomId;
    const dayId = event.currentTarget.dataset.dayId;

    //target

    const days = columns.find((column) => column.room.id === Number(roomId));
    const cell = days?.cells.find((day) => day.day === Number(dayId));

    const cors = event.currentTarget.getBoundingClientRect();

    setCoords({
      x: cors.x,
      y: cors.y,
    });

    setTooltipData({
      roomId,
      dayId,
      cell,
    });
  };

  const onMouseMove = (event: React.SyntheticEvent<HTMLDivElement>) => {
    if (tooltipData) {
      const roomId = event.currentTarget.dataset.roomId;
      const dayId = event.currentTarget.dataset.dayId;

      if (roomId !== tooltipData.roomId && dayId !== tooltipData.dayId) {
        setTooltipData(null);
      }
    }
  };

  return (
    <>
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
              />
            ))}
          </RoomColumn>
        ))}
      </Container>

      <Tooltip data={tooltipData} coords={coords} />
    </>
  );
};
