import { Client, SelectOption } from 'interfaces';
import { useCallback, useEffect, useState } from 'react';

import { UseSearchClientResult } from './interfaces';

export const useSearchClient = (clients: Client[]): UseSearchClientResult => {
  const [initialOptions, setInitialOptions] = useState<SelectOption[]>([]);
  const [options, setOptions] = useState<SelectOption[]>([]);

  const search = useCallback(
    (value: string) => {
      const filtered = value
        ? initialOptions.filter(
            (item) =>
              item.label.toUpperCase().includes(value.toUpperCase()) ||
              item.value.toUpperCase().includes(value.toUpperCase())
          )
        : initialOptions;

      setOptions(filtered);
    },
    [initialOptions]
  );

  useEffect(() => {
    const options = clients.map((item) => {
      return { label: `${item.firstName} ${item.lastName}`, value: item.login };
    });

    setInitialOptions(options);
    setOptions(options);
  }, [clients]);

  return {
    options,
    search,
  };
};
