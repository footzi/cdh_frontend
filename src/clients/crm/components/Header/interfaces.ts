import { Maybe, User } from 'interfaces';

export interface HeaderProps {
  user: Maybe<User>;
  onLogout(): void;
}
