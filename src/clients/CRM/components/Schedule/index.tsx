import React, { useEffect, useState } from 'react';

import { Cell } from './Cell';
import { Separate } from './Separate';
import { Table } from './Table';
import { ScheduleProps } from './interfaces';
import { Preloader } from 'common/components/Preloader';
import { useScheduleData } from './hooks/useScheduleData';

// import { usePopperTooltip } from 'react-popper-tooltip';
import { Transition } from 'react-transition-group';
import { TRANSITION_GROUP_DEFAULT_TIMEOUT } from 'constants/index';
import { Tooltip, TooltipContainer } from './Cell/styles';
// import { CellProps } from './interfaces';

import { usePopperTooltip } from 'react-popper-tooltip';

import { Container, LoaderContainer, DaysColumn, DayCell, RoomColumn, RoomName } from './styles';

export const Schedule: React.FC<ScheduleProps> = ({ year, month }) => {
  const { days, columns, isLoading } = useScheduleData(month, year);

  if (isLoading && !columns) {
    return (
      <LoaderContainer>
        <Preloader />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      <DaysColumn>
        <Separate />
        {days.map((day) => (
          <DayCell key={String(day)}>{day}</DayCell>
        ))}
      </DaysColumn>

      {columns && <Table columns={columns} />}

      {/*<div onClick={onClick} style={{ display: 'flex' }} onMouseMove={onMouseMove}>*/}
      {/*  {columns &&*/}
      {/*    columns.map((column) => (*/}
      {/*      <RoomColumn key={column.room.id}>*/}
      {/*        <RoomName>{column.room.name}</RoomName>*/}

      {/*        {column.cells.map((cell) => (*/}
      {/*          //@ts-ignore*/}
      {/*          <Cell*/}
      {/*            //@ts-ignore*/}
      {/*            dataRoomId={column.room.id}*/}
      {/*            dataDayId={cell.day}*/}
      {/*            key={cell.day}*/}
      {/*            status={cell.order.status}*/}
      {/*            // visible={column.room.id + '_' + cell.day === clicks}*/}
      {/*            // clicksR={clicksR}*/}
      {/*            // setTooltipRef={setTooltipRef}*/}
      {/*            // visible={visible}*/}
      {/*          />*/}
      {/*        ))}*/}
      {/*      </RoomColumn>*/}
      {/*    ))}*/}
      {/*</div>*/}

      {/*<Transition in={Boolean(tooltipData)} timeout={TRANSITION_GROUP_DEFAULT_TIMEOUT} unmountOnExit>*/}
      {/*  {(state) => (*/}
      {/*    <TooltipContainer className={`fade-${state}`} style={{ top: coords.y + 'px', left: coords.x + 'px' }}>*/}
      {/*      <Tooltip>hello Man</Tooltip>*/}
      {/*    </TooltipContainer>*/}
      {/*  )}*/}
      {/*</Transition>*/}
    </Container>
  );
};
