import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private admins = [
    { username: 'admin1', password: 'pass1', fullName: 'Admin Uno' },
    { username: 'admin2', password: 'pass2', fullName: 'Admin Dos' },
    { username: 'admin3', password: 'pass3', fullName: 'Admin Tres' },
  ];

  private loggedUser: any = null;

  constructor() { }

  login(username: string, password: string, fullName: string): boolean {
    const user = this.admins.find(
      u => u.username === username && u.password === password && u.fullName === fullName
    );
    if (user) {
      this.loggedUser = user;
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedUser = null;
  }

  getUser(): any {
    return this.loggedUser;
  }

  isLoggedIn(): boolean {
    return this.loggedUser !== null;
  }
}
