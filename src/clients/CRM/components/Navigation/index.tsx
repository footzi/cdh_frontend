import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, List, Item } from './styles';
import { NAVIGATION_MENU } from './constants';

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
