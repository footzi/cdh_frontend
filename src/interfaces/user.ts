import { USER_ROLES } from 'constants/index';

export interface User {
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
