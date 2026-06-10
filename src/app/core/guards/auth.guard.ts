import { CanActivateFn } from '@angular/router';

// Pass-through until the auth feature wires JWT/session validation.
export const authGuard: CanActivateFn = () => true;
