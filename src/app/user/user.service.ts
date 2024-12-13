import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy{
  private user$$ = new BehaviorSubject<User | null>(null)
  private user$ = this.user$$.asObservable()

  USER_KEY = '[user]';
  user: User | null = null;
  userSubscription: Subscription | null = null;


  get isLogged() : boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    })
   }

  login(email: string, password: string) {

    const url = "https://api.backendless.com/4D2A8539-DF52-4239-AABA-8BCDFE9BF391/4425D43C-344E-43B3-A811-D68B92E6010F/users/login"
    return this.http.post<User>(url, { login: email, password }).pipe(tap(user => {
      this.user$$.next(user)
      this.user = user;
      localStorage.setItem('token', user['user-token'])
    }))
  }

  logout() {
    // const url = "https://api.backendless.com/4D2A8539-DF52-4239-AABA-8BCDFE9BF391/4425D43C-344E-43B3-A811-D68B92E6010F/users/logout"
    // this.http.get(url);
    this.user = null;
    localStorage.removeItem('token')
  }

  register(email: string, password: string, username: string) {
    const url = "/api/Users"

    return this.http.post<User>(url, { email, password, username }).pipe(tap(user => {
      this.user$$.next(user)
      this.user = user;
    }))
  }

  getUser(){
    return this.user;
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }
}
