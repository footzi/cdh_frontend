import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { NAVIGATION_MENU } from './constants';
import { Container, Item, List } from './styles';

export const Navigation: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      <List>
        {NAVIGATION_MENU.map(({ href, name }) => (
          <Item key={href} isActive={pathname === href}>
            <Link to={href}>{name}</Link>
          </Item>
        ))}
      </List>
    </Container>
  );
};
