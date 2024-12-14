import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { tap, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {

    const url = "https://api.backendless.com/4D2A8539-DF52-4239-AABA-8BCDFE9BF391/4425D43C-344E-43B3-A811-D68B92E6010F/users/login"
    return this.http.post<User>(url, { login: email, password }).pipe(tap(user => {
      this.user = user;
    }))
  }

  logout() {
    const url = "https://api.backendless.com/4D2A8539-DF52-4239-AABA-8BCDFE9BF391/4425D43C-344E-43B3-A811-D68B92E6010F/users/logout"
    this.http.get(url);
    this.user = null;
  }

  register(email: string, password: string, username: string) {
    const url = "/api/Users"

    return this.http.post<User>(url, { email, password, username }).pipe(tap(user => {
      this.user = user;
    }))
  }

}
