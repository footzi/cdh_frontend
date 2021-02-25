import styled from 'styled-components';
import { COLORS } from 'colors';
import { WrapperProps, ContainerProps, ArrowButtonProps, HeaderProps, TitleProps } from './interfaces';

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ marginAround }) => (marginAround ? `calc(100% - ${marginAround})` : '100%')};
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.button<HeaderProps>`
  width: 100%;
  height: 42px;
  background-color: ${({ backgroundColor }) => backgroundColor || COLORS.LIGHT_ORANGE};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;

  svg {
    margin-right: ${({ arrowMarginRight }) => arrowMarginRight || '35px'};
  }
`;

export const Title = styled.span<TitleProps>`
  font-size: ${({ size }) => size || '16px'};
  color: ${({ color }) => color || COLORS.WHITE};
  margin-left: 20px;
`;

export const RightBlock = styled.div`
  margin-left: auto;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  height: 0;
  overflow: ${({ isTransitionEnd }) => (isTransitionEnd ? 'visible' : 'hidden')};
  transition: ${({ useTransition }) => (useTransition ? ' height 0.3s' : 'none')};

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

export const ArrowButton = styled.div<ArrowButtonProps>`
  svg {
    width: 15px;
    transition: transform 0.3s;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(0)' : 'rotate(180deg)')};
  }
`;
