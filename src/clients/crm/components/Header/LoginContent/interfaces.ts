import { User } from 'interfaces';

export interface LoginContentProps {
  user: User;
  onLogout(): void;
}
