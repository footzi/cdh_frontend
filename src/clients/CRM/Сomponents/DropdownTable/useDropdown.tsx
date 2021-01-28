import React, { useEffect, useRef, useState } from 'react';

interface UseDropdownProps {
  ref: React.MutableRefObject<HTMLDivElement | null>;
}

interface useDropdownResult {}

export const useDropdown = ({ ref }: UseDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
