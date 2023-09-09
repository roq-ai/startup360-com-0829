const mapping: Record<string, string> = {
  accounts: 'account',
  platforms: 'platform',
  'preferred-service-providers': 'preferred_service_provider',
  profiles: 'profile',
  'service-providers': 'service_provider',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
