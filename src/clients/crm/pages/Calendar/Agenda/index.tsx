import React from 'react';

import { AGENDA_ITEMS } from './constants';
import { Container, Item, Label, Text } from './styles';

export const Agenda: React.FC = () => (
  <Container>
    {AGENDA_ITEMS.map(({ status, text }) => (
      <Item key={status}>
        <Label status={status} />
        <Text>{text}</Text>
      </Item>
    ))}
  </Container>
);
