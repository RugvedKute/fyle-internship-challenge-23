import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (localStorage.getItem('userName')) {
      return true; 
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}