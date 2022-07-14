import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin: boolean = false;
  constructor() { }

  login() {
    this.isLogin = !this.isLogin;
    return this.isLogin;
  }
}
