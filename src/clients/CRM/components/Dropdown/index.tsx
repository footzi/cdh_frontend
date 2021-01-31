import React, { useCallback, useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
import { ArrowDownIcon } from 'icons';
import { Container, Header, Title, Wrapper, Content, ArrowButton, RightBlock } from './styles';
import { DropdownProps } from './interfaces';
import { useDropdown } from './hooks/useDropdown';
import { TRANSITION_TIMEOUT, TIMEOUT } from './constants';

export const Dropdown: React.FC<DropdownProps> = ({ styles, titleText, rightBlock, isDefaultOpen, children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen, height } = useDropdown({ ref: contentRef, isDefaultOpen });
  const [isTransitionEnd, setIsTransitionEnd] = useState(false);
  const [isStart, setIsStart] = useState(false);

  const onToggle = useCallback(() => {
    setIsStart(true);
    setIsOpen(!isOpen);
  }, [isOpen]);

  const onEntered = useCallback(() => {
    setTimeout(() => {
      setIsTransitionEnd(true);
      setIsStart(false);
    }, TRANSITION_TIMEOUT);
  }, []);

  const onExiting = useCallback(() => setIsTransitionEnd(false), []);

  return (
    <Wrapper marginAround={styles.marginAround}>
      <Header
        backgroundColor={styles.backgroundColor}
        borderRadius={styles.borderRadius}
        arrowMarginRight={styles.arrowMarginRight}
        onClick={onToggle}>
        <Title color={styles.titleColor} size={styles.titleSize}>
          {titleText}
        </Title>
        <RightBlock>{rightBlock}</RightBlock>
        <ArrowButton isOpen={isOpen}>
          <ArrowDownIcon stroke={styles.arrowColor} />
        </ArrowButton>
      </Header>

      <Transition in={isOpen} timeout={TIMEOUT} unmountOnExit onEntered={onEntered} onExiting={onExiting}>
        {(state) => (
          <Container
            className={`slide-down-${state}`}
            height={height}
            isTransitionEnd={isTransitionEnd}
            useTransition={isStart}>
            <Content ref={contentRef}>{children}</Content>
          </Container>
        )}
      </Transition>
    </Wrapper>
  );
};
