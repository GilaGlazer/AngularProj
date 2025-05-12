import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let role = sessionStorage.getItem("role");
  if(role === "Secretary")
    return true;   
  return false;
};
