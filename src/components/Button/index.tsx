import classNames from 'classnames';
import { Loader } from 'components/Loader';
import React from 'react';

import { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = ({ children, theme, isDisabled, isLoading, ...rest }) => {
  const className = classNames('button', { 'is-loading': isLoading }, theme && `button_theme_${theme}`);
  return (
    <button className={className} disabled={isDisabled} {...rest}>
      {isLoading && (
        <div className="button__loader">
          <Loader />
        </div>
      )}
      <span className="button__text">{children}</span>
    </button>
  );
};
