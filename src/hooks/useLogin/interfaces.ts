import { Admin, Client, Tokens } from 'interfaces';

export interface UseLoginQueryData {
  user: Client | Admin;
  tokens: Tokens;
}
