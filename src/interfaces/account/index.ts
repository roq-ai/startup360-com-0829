import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface AccountInterface {
  id?: string;
  username: string;
  email: string;
  password: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface AccountGetQueryInterface extends GetQueryInterface {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  user_id?: string;
}
