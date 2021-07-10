import { Injectable } from '@angular/core';
import { 
  Router,
  CanActivate,
  ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const token = localStorage.getItem('token');
    if(!token){
        this.router.navigate(['/login']);
    }
    return true;

  }
}