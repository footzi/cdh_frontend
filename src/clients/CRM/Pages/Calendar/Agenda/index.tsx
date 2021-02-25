import React from 'react';
import { Container, Label, Item, Text } from './styles';
import { AGENDA_ITEMS } from './constants';

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
