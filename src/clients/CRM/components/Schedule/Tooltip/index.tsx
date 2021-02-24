import React, { useMemo } from 'react';
import { Transition } from 'react-transition-group';
import { STATUSES_ORDER, TRANSITION_GROUP_DEFAULT_TIMEOUT } from 'constants/index';
import { getFullDate } from 'utils/index';
import { TooltipProps } from '../interfaces';
import { BookingButton, Container, Content, Date, Header, Room, Status } from './styles';

export const Tooltip: React.FC<TooltipProps> = ({ data, coords }) => {
  const cell = data?.cell;
  const newOrder = data?.newOrder;
  const isBooking = !!newOrder;

  const order = cell?.order;

  if (!order && !newOrder) {
    return null;
  }

  const date = useMemo(() => {
    return order && getFullDate(order.start);
  }, [data]);

  return (
    <Transition in={Boolean(data)} timeout={TRANSITION_GROUP_DEFAULT_TIMEOUT} unmountOnExit>
      {(state) => (
        <Container className={`fade-${state}`} coords={coords} data-id="tooltip">
          <Content>
            <Header isBooking={isBooking}>
              <Date>{isBooking ? newOrder?.interval : date}</Date>
              <Room>
                <span>Номер</span> {isBooking ? newOrder?.room?.name : order?.room?.name}
              </Room>
            </Header>

            {!isBooking && order && (
              <>
                {order.status === STATUSES_ORDER.FREE && <Status status={order.status}>Свободно</Status>}

                {order.status === STATUSES_ORDER.NOT_PAID && (
                  <Status status={order.status}>
                    Забронировано. <a href={`/order/${order.id}`}>№{order.id}</a>
                  </Status>
                )}

                {order.status === STATUSES_ORDER.PAID && (
                  <Status status={order.status}>
                    Оплачено. <a href={`/order/${order.id}`}>№{order.id}</a>
                  </Status>
                )}
              </>
            )}

            {isBooking && <BookingButton>Забронировать</BookingButton>}
          </Content>
        </Container>
      )}
    </Transition>
  );
};
