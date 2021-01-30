import styled from 'styled-components';
import { Colors } from 'colors';
import { WrapperProps, ContainerProps, ArrowButtonProps, HeaderProps, TitleProps, RightTextProps } from './interfaces';

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ marginAround }) => (marginAround ? `calc(100% - ${marginAround})` : '100%')};
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.button<HeaderProps>`
  width: 100%;
  height: 56px;
  background-color: ${({ backgroundColor }) => backgroundColor || Colors.LIGHT_ORANGE};
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
  font-size: ${({ size }) => size || '22px'};
  color: ${({ color }) => color || Colors.WHITE};
  margin-left: 35px;
`;

export const RightText = styled.span<RightTextProps>`
  font-size: 20px;
  color: ${({ color }) => color && Colors.GREEN};
  margin-left: auto;
  margin-right: 80px;
`;

export const Container = styled.div<ContainerProps>`
  position: relative;
  transition: height 0.3s;
  height: 0;
  overflow: ${({ isTransitionEnd }) => (isTransitionEnd ? 'visible' : 'hidden')};

  &.slide-down-entered {
    height: ${({ height }) => height + 'px'};
  }
`;

export const Content = styled.div`
  //width: 100%;
  //position: absolute;
  //top: 0;
  //left: 0;
  height: auto;
`;

export const ArrowButton = styled.div<ArrowButtonProps>`
  svg {
    transition: transform 0.3s;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;
