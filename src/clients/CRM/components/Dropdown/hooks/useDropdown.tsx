import { useEffect, useState } from 'react';
import { UseDropdownProps, UseDropdownResult } from '../interfaces';

export const useDropdown = ({ ref, isDefaultOpen }: UseDropdownProps): UseDropdownResult => {
  const [isOpen, setIsOpen] = useState<boolean>(!!isDefaultOpen);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (isOpen && ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [isOpen]);

  const handleResize = () => {
    console.log('resize');
    {/*@ts-ignore*/}
    console.log(ref.current.offsetHeight);
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // if (ref.current) {
    //   console.log(ref.current.offsetHeight);
    // }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isOpen,
    setIsOpen,
    height,
  };
};
