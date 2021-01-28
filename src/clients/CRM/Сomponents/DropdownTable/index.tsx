import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Colors } from 'colors';
import { Transition } from 'react-transition-group';

import { useDropdown } from './useDropdown';

const Containerrr = styled.section``;

export const MainRow = styled.div``;

export const InnerRow = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;

  svg {
    margin-right: 15px;
  }
`;

export const MainHeader = styled.div`
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

export const MainTitle = styled.span`
  font-size: 22px;
  color: ${Colors.WHITE};
  margin-left: 35px;
`;

export const InnerTitle = styled.span`
  font-size: 20px;
  color: ${Colors.WHITE};
  margin-left: 35px;
`;

export const InnerHeader = styled.div`
  height: 56px;
  background-color: ${Colors.DARK_GREY};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Test = styled.div``;

interface Cont {
  height: number;
}

export const Container = styled.div<Cont>`
  overflow: hidden;
  position: relative;
  transition: height 0.3s;
  height: 0;

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

export const ChilderTest: React.FC = () => {
  return (
    <>
      <h1>nhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnf</h1>
      <h1>nhfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnfnfnf</h1>
      <h1>nhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnf</h1>
      <h1>nhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnf</h1>
      <h1>nhfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnfnfnfnf</h1>
      <h1>nhfnfnfnfnfnfnf</h1>
      <h1>nhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnf</h1>
      <h1>nhfnfnfnfnfnfnf</h1>
      <h1>nhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnfnhfnfnfnfnfnfnf</h1>
    </>
  );
};

interface I {
  onClick(): void;
  isOpen: boolean;
}

interface ButtonIconI {
  isOpen: boolean;
}

export const ButtonIcon = styled.button<ButtonIconI>`
  svg {
    transition: transform 0.3s;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

export const Icon: React.FC<I> = ({ isOpen, onClick }) => {
  return (
    <ButtonIcon isOpen={isOpen} onClick={onClick}>
      <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
        <path d="M12 0L23.2583 13.5L0.74167 13.5L12 0Z" fill="white" />
      </svg>
    </ButtonIcon>
  );
};

export const DropdownTable: React.FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // const contentRef = useRef<HTMLDivElement>(null);
  // const [height, setHeight] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const { isOpen: isOpenInner, setIsOpen: setIsOpenInner, height: heightInner } = useDropdown({ ref: contentRef });
  const { isOpen: isOpenMain, setIsOpen: setIsOpenMain, height: heightMain } = useDropdown({ ref: mainRef });

  const onToggleInner = () => {
    setIsOpenInner(!isOpenInner);
  };

  const onToggleMain = () => {
    setIsOpenMain(!isOpenMain);
  };

  console.log(heightMain);

  // useEffect(() => {
  //   if (isOpen && contentRef.current) {
  //     setHeight(contentRef.current.offsetHeight);
  //   }
  // }, [isOpen]);

  return (
    <Containerrr>
      <MainRow>
        <MainHeader>
          <MainTitle>2021 год</MainTitle>
          <Icon isOpen={isOpenMain} onClick={onToggleMain} />
        </MainHeader>

        <Transition
          in={isOpenMain}
          timeout={{
            enter: 0,
            exit: 300,
          }}
          unmountOnExit>
          {(mainState) => (
            <Container className={`slide-down-${mainState}`} height={heightMain}>
              <Content ref={mainRef}>
                <InnerRow>
                  <InnerHeader>
                    <InnerTitle>Июль</InnerTitle>
                    <Icon isOpen={isOpenInner} onClick={onToggleInner} />
                  </InnerHeader>
                  <Transition
                    in={isOpenInner}
                    timeout={{
                      enter: 0,
                      exit: 300,
                    }}
                    unmountOnExit>
                    {(state) => (
                      <Container className={`slide-down-${state}`} height={heightInner}>
                        <Content ref={contentRef}>
                          <ChilderTest />
                        </Content>
                      </Container>
                    )}
                  </Transition>
                </InnerRow>
              </Content>
            </Container>
          )}
        </Transition>
      </MainRow>
    </Containerrr>
  );
};
