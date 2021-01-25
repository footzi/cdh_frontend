import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Colors } from 'colors';

const Container = styled.section``;

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

export const InnerContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 0;
`;

export const InnerContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: auto;
`;

export const ChilderTest: React.FC = () => {
  return <h1>nhfnfnfnfnfnfnf</h1>;
};

export const Icon: React.FC = () => {
  return (
    <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
      <path d="M12 0L23.2583 13.5L0.74167 13.5L12 0Z" fill="white" />
    </svg>
  );
};

export const DropdownTable: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const height = useRef<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      console.log(contentRef);
    }
  }, [contentRef]);

  return (
    <Container>
      <MainRow>
        <MainHeader>
          <MainTitle>2021 год</MainTitle>
          <Icon />
        </MainHeader>
        <InnerRow>
          <InnerHeader>
            <InnerTitle>Июль</InnerTitle>
            <Icon />
          </InnerHeader>
          <InnerContainer>
            <InnerContent ref={contentRef}>
              <ChilderTest />
            </InnerContent>
          </InnerContainer>
        </InnerRow>
      </MainRow>
    </Container>
  );
};
