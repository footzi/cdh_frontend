import './index.less';

import { Logo } from 'components/Logo';
import React from 'react';

export const Header: React.FC = () => (
  <header className="header">
    <Logo />
  </header>
);
