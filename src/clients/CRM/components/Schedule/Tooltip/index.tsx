import React from 'react';
import { Transition } from 'react-transition-group';
import { TRANSITION_GROUP_DEFAULT_TIMEOUT } from 'constants/index';
import { TooltipProps } from '../interfaces';
import { Container, Content, Header, Date, Room, Status, BookingButton } from './styles';

export const Tooltip: React.FC<TooltipProps> = ({ data, coords }) => {
  const isBooking = false;

  return (
    <Transition in={Boolean(data)} timeout={TRANSITION_GROUP_DEFAULT_TIMEOUT} unmountOnExit>
      {(state) => (
        <Container className={`fade-${state}`} coords={coords} data-id="tooltip">
          <Content>
            <Header>
              <Date>15 июля 2021г.</Date>
              <Room>
                <span>Номер</span> К6
              </Room>
            </Header>

            <Status>
              Оплачено. <a href="/order/1234">№06581</a>
            </Status>

            {isBooking && <BookingButton>Забронировать</BookingButton>}
          </Content>
        </Container>
      )}
    </Transition>
  );
};
