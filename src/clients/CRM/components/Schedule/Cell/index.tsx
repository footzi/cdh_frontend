import React, { useState } from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { Transition } from 'react-transition-group';
import { TRANSITION_GROUP_DEFAULT_TIMEOUT } from 'constants/index';
import { Status, Tooltip } from './styles';
import { CellProps } from './interfaces';

//@ts-ignore
export const Cell: React.FC<CellProps> = ({ status, Re, dataRoomId, dataDayId, visible, clicksR }) => {
  const [isV, setIsV] = useState(false);
  // const { setTooltipRef } = usePopperTooltip({
  //   trigger: 'click',
  //   placement: 'top',
  //   closeOnTriggerHidden: true,
  //   // interactive: true,
  //   // delayHide: 100
  // });

  // console.log(clicksR);

  // const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
  //   trigger: 'click',
  //   placement: 'top',
  //   closeOnTriggerHidden: true,
  //   // interactive: true,
  //   // delayHide: 100
  // });

  const onMouseEnter = () => {
    console.log('inm');
    setIsV(true)




  }

  const onMouseLeave = () => {
    console.log('inm');
    setIsV(false)
  }

  // setTooltipRef()



  return (
    <>
      <Status status={status} data-room-id={dataRoomId} data-day-id={dataDayId}>
        {/*<Tooltip>12345</Tooltip>*/}
      </Status>

      {/*<Transition in={visible} timeout={TRANSITION_GROUP_DEFAULT_TIMEOUT} unmountOnExit>*/}
      {/*  {(state) => (*/}
      {/*    <Tooltip className={`fade-${state}`}>*/}
      {/*      hello Man*/}
      {/*    </Tooltip>*/}
      {/*  )}*/}
      {/*</Transition>*/}

      {/*<Transition in={visible} timeout={TRANSITION_GROUP_DEFAULT_TIMEOUT} unmountOnExit>*/}
      {/*  {(state) => (*/}
      {/*    <Tooltip className={`fade-${state}`} ref={setTooltipRef}>*/}
      {/*      hello Man*/}
      {/*    </Tooltip>*/}
      {/*  )}*/}
      {/*</Transition>*/}
    </>
  );
};
