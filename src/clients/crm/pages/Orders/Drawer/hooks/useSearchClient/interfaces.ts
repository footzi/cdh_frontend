import { SelectOption } from 'interfaces';

export interface UseSearchClientResult {
  options: SelectOption[];
  search(value: string): void;
}
