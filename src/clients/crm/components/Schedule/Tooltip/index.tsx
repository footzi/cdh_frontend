import { STATUSES_ORDER, TRANSITION_GROUP_DEFAULT_TIMEOUT } from 'constants/index';
import React, { useMemo } from 'react';
import { Transition } from 'react-transition-group';
import { getFullDate } from 'utils/getFullDate';

import { TooltipProps } from '../interfaces';
import { BookingButton, Container, Content, Date, Header, Room, Status } from './styles';

export const Tooltip: React.FC<TooltipProps> = ({ data, coords }) => {
  const cell = data?.cell;
  const newOrder = data?.newOrder;
  const start = data?.start;
  const end = data?.end;
  const isBooking = !!newOrder;

  const order = cell?.order;

  const date = useMemo(() => start && getFullDate(start), [start]);
  const interval = useMemo(() => newOrder && (start !== end ? `${start} - ${end}` : start), [newOrder, start, end]);

  if (!order && !newOrder) {
    return null;
  }

  return (
    <Transition in={Boolean(data)} timeout={TRANSITION_GROUP_DEFAULT_TIMEOUT} unmountOnExit>
      {(state) => (
        <Container className={`fade-${state}`} coords={coords} data-id="tooltip">
          <Content>
            <Header isBooking={isBooking}>
              <Date>{isBooking ? interval : date}</Date>
              <Room>
                <span>Номер</span> {isBooking ? newOrder?.room?.name : order?.room?.name}
              </Room>
            </Header>

            {!isBooking && order && (
              <>
                {order.status === STATUSES_ORDER.FREE && <Status status={order.status}>Свободно</Status>}

                {order.status === STATUSES_ORDER.NOT_PAID && (
                  <Status status={order.status}>
                    Забронировано. <a href={`/order/${order.uuid}`}>№{order.uuid}</a>
                  </Status>
                )}

                {order.status === STATUSES_ORDER.PAID && (
                  <Status status={order.status}>
                    Оплачено. <a href={`/order/${order.uuid}`}>№{order.uuid}</a>
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
