interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'Team Member', 'Administrator'],
  tenantName: 'Platform',
  applicationName: 'STARTUP360.COM',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Search and view service provider profiles', 'Create an account', 'Delete own account'],
  ownerAbilities: [
    'Manage own account on the Platform',
    'Invite Team Members and Administrators to join the Platform',
    'Manage own profile',
    'Search and view profiles of service providers',
    'Manage preferred list of service providers',
    'Delete own account',
  ],
};
