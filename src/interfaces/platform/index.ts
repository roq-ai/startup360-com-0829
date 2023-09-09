import { ServiceProviderInterface } from 'interfaces/service-provider';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PlatformInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  service_provider?: ServiceProviderInterface[];
  user?: UserInterface;
  _count?: {
    service_provider?: number;
  };
}

export interface PlatformGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
