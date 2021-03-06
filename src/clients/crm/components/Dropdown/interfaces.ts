import React from 'react';

export interface DropdownProps {
  styles: DropdownPropsStyles;
  titleText: string;
  rightBlock?: JSX.Element;
  isDefaultOpen?: boolean;
}

export interface DropdownPropsStyles {
  backgroundColor?: string;
  titleColor?: string;
  titleSize?: string;
  arrowColor?: string;
  arrowMarginRight?: string;
  marginAround?: string;
  borderRadius?: string;
}

export interface WrapperProps {
  marginAround?: string;
}

export interface ContainerProps {
  height: number;
  isTransitionEnd: boolean;
  useTransition: boolean;
}

export interface ArrowButtonProps {
  isOpen: boolean;
}

export interface HeaderProps {
  backgroundColor?: string;
  borderRadius?: string;
  arrowMarginRight?: string;
}

export interface TitleProps {
  color?: string;
  size?: string;
}

export interface UseDropdownProps {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  isDefaultOpen?: boolean;
}

export interface UseDropdownResult {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
  height: number;
}
