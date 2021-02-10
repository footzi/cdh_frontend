import React from 'react';
import { usePopperTooltip } from 'react-popper-tooltip';
import { Transition } from 'react-transition-group';
import { TRANSITION_GROUP_DEFAULT_TIMEOUT } from 'constants/index';
import { Status, Tooltip } from './styles';
import { CellProps } from './interfaces';

export const Cell: React.FC<CellProps> = ({ status }) => {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } = usePopperTooltip({
    trigger: 'click',
    placement: 'top',
    closeOnTriggerHidden: true,
    // interactive: true,
    // delayHide: 100
  });

  return (
    <>
      <Status status={status} />

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
