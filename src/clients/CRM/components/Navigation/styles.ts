import styled from 'styled-components';
import { COLORS } from 'colors';

export const Container = styled.nav`
  margin-top: 35px;
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
`;

export const Item = styled.li<{ isActive: boolean }>`
  margin: 0 70px;
  font-size: 14px;
  line-height: 16px;
  text-decoration: ${({ isActive }) => isActive && 'underline'};

  a {
    color: ${COLORS.BLACK};
  }
`;
