import { USER_ROLES } from 'constants/index';

import { Tokens } from './tokens';

export interface CommonUser {
  id?: number;
  login: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  roles: USER_ROLES[];
  password?: string;
  isConfirm: boolean;
  isActive: boolean;
}

// @todo должен быть типом от USer
export interface Client {
  id?: number;
  login: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
}

export interface Admin {
  id?: number;
  login: string;
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
}

export type User = Client | Admin;
