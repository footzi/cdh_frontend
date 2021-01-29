import React, { useEffect, useRef, useState } from 'react';

interface UseDropdownProps {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  isDefaultOpen?: boolean;
}

interface UseDropdownResult {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
  height: number;
}

export const useDropdown = ({ ref, isDefaultOpen }: UseDropdownProps): UseDropdownResult => {
  const [isOpen, setIsOpen] = useState<boolean>(!!isDefaultOpen);
  // const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [isOpen]);

  return {
    isOpen,
    setIsOpen,
    height,
  };
};
