import './index.less';

import { Spin } from 'antd';
import React from 'react';

export const Loader: React.FC = () => {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
};
