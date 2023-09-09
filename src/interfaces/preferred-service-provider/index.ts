import { UserInterface } from 'interfaces/user';
import { ServiceProviderInterface } from 'interfaces/service-provider';
import { GetQueryInterface } from 'interfaces';

export interface PreferredServiceProviderInterface {
  id?: string;
  user_id: string;
  service_provider_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  service_provider?: ServiceProviderInterface;
  _count?: {};
}

export interface PreferredServiceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  service_provider_id?: string;
}
