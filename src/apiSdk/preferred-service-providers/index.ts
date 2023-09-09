import axios from 'axios';
import queryString from 'query-string';
import {
  PreferredServiceProviderInterface,
  PreferredServiceProviderGetQueryInterface,
} from 'interfaces/preferred-service-provider';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPreferredServiceProviders = async (
  query?: PreferredServiceProviderGetQueryInterface,
): Promise<PaginatedInterface<PreferredServiceProviderInterface>> => {
  const response = await axios.get('/api/preferred-service-providers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPreferredServiceProvider = async (preferredServiceProvider: PreferredServiceProviderInterface) => {
  const response = await axios.post('/api/preferred-service-providers', preferredServiceProvider);
  return response.data;
};

export const updatePreferredServiceProviderById = async (
  id: string,
  preferredServiceProvider: PreferredServiceProviderInterface,
) => {
  const response = await axios.put(`/api/preferred-service-providers/${id}`, preferredServiceProvider);
  return response.data;
};

export const getPreferredServiceProviderById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/preferred-service-providers/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deletePreferredServiceProviderById = async (id: string) => {
  const response = await axios.delete(`/api/preferred-service-providers/${id}`);
  return response.data;
};
