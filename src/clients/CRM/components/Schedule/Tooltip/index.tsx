import React from 'react';
import { Transition } from 'react-transition-group';
import { TRANSITION_GROUP_DEFAULT_TIMEOUT } from 'constants/index';
import { Container, Content } from './styles';

export interface TooltipProps {

}

export const Tooltip: React.FC<TooltipProps> = ({data, coords }) => {
  return (
    <Transition in={Boolean(data)} timeout={TRANSITION_GROUP_DEFAULT_TIMEOUT} unmountOnExit>
      {(state) => (
        <Container className={`fade-${state}`} style={{ top: coords.y + 'px', left: coords.x + 'px' }}>
          <Content>hello Man</Content>
        </Container>
      )}
    </Transition>
  )
};
