import { PreferredServiceProviderInterface } from 'interfaces/preferred-service-provider';
import { PlatformInterface } from 'interfaces/platform';
import { GetQueryInterface } from 'interfaces';

export interface ServiceProviderInterface {
  id?: string;
  name: string;
  service_type: string;
  description?: string;
  platform_id: string;
  created_at?: any;
  updated_at?: any;
  preferred_service_provider?: PreferredServiceProviderInterface[];
  platform?: PlatformInterface;
  _count?: {
    preferred_service_provider?: number;
  };
}

export interface ServiceProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  service_type?: string;
  description?: string;
  platform_id?: string;
}
