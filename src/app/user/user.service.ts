import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | null = null;

  get isLogged() : boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    const url = "https://api.backendless.com/4D2A8539-DF52-4239-AABA-8BCDFE9BF391/4425D43C-344E-43B3-A811-D68B92E6010F/users/login";
    return this.http.post<User>(url, { login: email, password }).pipe(
      tap(user => {
        this.user = user;
        localStorage.setItem('sessionId', user.objectId);
      })
    );
  }

  logout() {
    this.user = null;
    localStorage.removeItem('sessionId');
  }

  register(email: string, password: string, username: string) {
    const url = "/api/Users"

    return this.http.post<User>(url, { email, password, username }).pipe(tap(user => {
      this.user = user;
      localStorage.setItem('sessionId', user.objectId);
    }))
  }


  restoreSession() {
    const user_id = localStorage.getItem('sessionId');

    if (!user_id) {
      return; 
    }
  
    const url = `https://lightlysystem-us.backendless.app/api/data/Users/` + user_id;
  
    this.http.get<User>(url).subscribe({
      next: (user) => {
        this.user = user;
      }
    });
  }
 
}
