import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Colors } from 'colors';
import { Transition } from 'react-transition-group';

import { useDropdown } from './useDropdown';
// import { ButtonIcon, ChilderTest, Container, Content, InnerRow } from './index';
// import { Icon, MainHeader, MainTitle } from './index';

const T = 300;

const TIMEOUT = {
  enter: 0,
  exit: T,
};

export const Row = styled.div``;

export const Header = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${Colors.ORANGE};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    margin-right: 35px;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  color: ${Colors.WHITE};
  margin-left: 35px;
`;

interface Cont {
  height: number;
  isTransitionEnd: boolean;
}

export const Container = styled.div<Cont>`
  position: relative;
  transition: height 0.3s;
  height: 0;
  overflow: ${({ isTransitionEnd }) => (isTransitionEnd ? 'visible' : 'hidden')};

  &.slide-down-entered {
    height: ${({ height }) => height + 'px'};
  }
`;

export const Content = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
`;

interface DropdownProps {
  isDefaultOpen?: boolean;
}

// theme // title //status
export const Dropdown: React.FC<DropdownProps> = ({ isDefaultOpen, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, height } = useDropdown({ ref: contentRef, isDefaultOpen });
  const [isTransitionEnd, setIsTransitionEnd] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onEntered = () => {
    setTimeout(() => {
      setIsTransitionEnd(true);
    }, 300);
  };

  const onExiting = () => {
    setIsTransitionEnd(false);
  };

  return (
    <Row>
      <Header onClick={onToggle}>
        <Title>2021 год</Title>
        <BIcon isOpen={isOpen} />
      </Header>

      <Transition in={isOpen} timeout={TIMEOUT} unmountOnExit onEntered={onEntered} onExiting={onExiting}>
        {(state) => (
          <Container className={`slide-down-${state}`} height={height} isTransitionEnd={isTransitionEnd}>
            <Content ref={contentRef}>{children}</Content>
          </Container>
        )}
      </Transition>
    </Row>
  );
};

interface I {
  isOpen: boolean;
}

interface IconProps {
  isOpen: boolean;
}

export const Icon = styled.div<IconProps>`
  svg {
    transition: transform 0.3s;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export const BIcon: React.FC<I> = ({ isOpen }) => {
  return (
    <Icon isOpen={isOpen}>
      <svg width="21" height="12" viewBox="0 0 21 12" fill="none">
        <path d="M0.5 11L9.79289 1.70711C10.1834 1.31658 10.8166 1.31658 11.2071 1.70711L20.5 11" stroke="white" />
      </svg>
    </Icon>
  );
};
