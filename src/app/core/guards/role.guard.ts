import { CanActivateFn } from '@angular/router';

export type AppRole = 'EMPLOYEE' | 'COUNTER' | 'ADMIN';

export const APP_ROLES = {
  employee: 'EMPLOYEE',
  counter: 'COUNTER',
  admin: 'ADMIN',
} as const;

// Pass-through until the auth feature reads the JWT role claim.
export const roleGuard: CanActivateFn = () => true;
