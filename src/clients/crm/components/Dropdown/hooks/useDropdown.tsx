import { useCallback, useState } from 'react';
import { useResizeDetector } from 'react-resize-detector';

import { UseDropdownProps, UseDropdownResult } from '../interfaces';

export const useDropdown = ({ ref, isDefaultOpen }: UseDropdownProps): UseDropdownResult => {
  const [isOpen, setIsOpen] = useState<boolean>(!!isDefaultOpen);
  const [height, setHeight] = useState<number>(0);

  const onResize = useCallback(() => {
    if (isOpen && ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [isOpen, ref]);

  useResizeDetector({ targetRef: ref, onResize, handleWidth: false });

  return {
    isOpen,
    setIsOpen,
    height,
  };
};
