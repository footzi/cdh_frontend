import styled from 'styled-components';

export const Container = styled.div`
  margin-top: -70px;
  margin-left: 30px;
  transition: opacity 0.3s;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;

  &.fade-entered {
    opacity: 1;
  }
`;

export const Content = styled.div`
  width: 225px;
  height: 70px;
  background-color: white;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
