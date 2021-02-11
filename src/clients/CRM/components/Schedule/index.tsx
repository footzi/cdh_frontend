import React, { useEffect, useState } from 'react';

import { Cell } from './Cell';
import { Separate } from './Separate';
import { ScheduleProps } from './interfaces';
import { Preloader } from 'common/components/Preloader';
import { useScheduleData } from './hooks/useScheduleData';

// import { usePopperTooltip } from 'react-popper-tooltip';
import { Transition } from 'react-transition-group';
import { TRANSITION_GROUP_DEFAULT_TIMEOUT } from 'constants/index';
import { Tooltip } from './Cell/styles';
// import { CellProps } from './interfaces';

import { usePopperTooltip } from 'react-popper-tooltip';

import { Container, LoaderContainer, DaysColumn, DayCell, RoomColumn, RoomName } from './styles';

export const Schedule: React.FC<ScheduleProps> = ({ year, month }) => {
  const { days, columns, isLoading } = useScheduleData(month, year);

  // const { visible, setV } = useState(false);
  const [clicks, setClicks] = useState('');
  const [clicksR, setClicksR] = useState('');

  const [tooltipData, setTooltipData] = useState(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  // const { getTooltipProps, setTooltipRef, setTriggerRef, visible, triggerRef } = usePopperTooltip({
  //   trigger: 'click',
  //   placement: 'top',
  //   closeOnTriggerHidden: true,
  //   // interactive: true,
  //   // delayHide: 100
  // });

  // console.log(triggerRef);

  if (isLoading && !columns) {
    return (
      <LoaderContainer>
        <Preloader />
      </LoaderContainer>
    );
  }
  //
  // useEffect(() => {
  //
  // }, [triggerRef])

  //@ts-ignore
  const onClick = (event) => {
    const roomId = event.target.dataset.roomId;
    const dayId = event.target.dataset.dayId;

    const days = columns?.find((column) => column.room.id === Number(roomId));
    const cell = days?.cells?.find((day) => day.day === Number(dayId));

    const cors = event.target.getBoundingClientRect();

    setCoords({
      x: cors.x + 30,
      y: cors.y - 70,
    });

    //@ts-ignore
    setTooltipData({
      //@ts-ignore
      roomId,
      dayId,
      cell,
    });
  };

  //@ts-ignore
  const onMouseMove = (event) => {
    if (tooltipData) {
      const roomId = event.target.dataset.roomId;
      const dayId = event.target.dataset.dayId;

      //@ts-ignore
      if (roomId !== tooltipData.roomId && roomId !== tooltipData.dayId) {
        setTooltipData(null);
      }
    }
    console.log(event.target);
    // console.log(event.target);
  };

  return (
    <Container>
      <DaysColumn>
        <Separate />
        {days.map((day) => (
          <DayCell key={String(day)}>{day}</DayCell>
        ))}
      </DaysColumn>

      <div onClick={onClick} style={{ display: 'flex' }} onMouseMove={onMouseMove}>
        {columns &&
          columns.map((column) => (
            <RoomColumn key={column.room.id}>
              <RoomName>{column.room.name}</RoomName>

              {column.cells.map((cell) => (
                //@ts-ignore
                <Cell
                  //@ts-ignore
                  dataRoomId={column.room.id}
                  dataDayId={cell.day}
                  key={cell.day}
                  status={cell.order.status}
                  // visible={column.room.id + '_' + cell.day === clicks}
                  // clicksR={clicksR}
                  // setTooltipRef={setTooltipRef}
                  // visible={visible}
                />
              ))}
            </RoomColumn>
          ))}
      </div>


      <Transition in={Boolean(tooltipData)} timeout={TRANSITION_GROUP_DEFAULT_TIMEOUT} unmountOnExit>
        {(state) => (
          <Tooltip className={`fade-${state}`} style={{ top: coords.y + 'px', left: coords.x + 'px' }}>
            hello Man
          </Tooltip>
        )}
      </Transition>
    </Container>
  );
};
