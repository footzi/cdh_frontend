import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { Transition } from 'react-transition-group';
import { TRANSITION_GROUP_DEFAULT_TIMEOUT } from 'constants/index';
import { Status, Tooltip } from './styles';

//@ts-ignore
export const Cell = ({ status }) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    trigger: 'click',
    placement: 'top',
    closeOnTriggerHidden: true,
    // interactive: true,
    // delayHide: 100
  });

  return (
    <>
      <Status status={status} ref={setTriggerRef} />

      <Transition in={visible} timeout={TRANSITION_GROUP_DEFAULT_TIMEOUT} unmountOnExit>
        {(state) => (
          <Tooltip className={`fade-${state}`} {...getTooltipProps()} ref={setTooltipRef}>
            hello Man
          </Tooltip>
        )}
      </Transition>
    </>
  );
};