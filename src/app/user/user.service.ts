import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = '[user]';
  user: User | null = null;

  constructor(private http: HttpClient) {
    try {

    } catch (error) {

    }
  }

  login() {
    const url = "https://api.backendless.com/4D2A8539-DF52-4239-AABA-8BCDFE9BF391/4425D43C-344E-43B3-A811-D68B92E6010F/users/login"

    this.http.post(url, {email: "pesho@abv.bg", password: "1234"})

    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user))
  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }

  register(email :string, password: string){
    const url = "https://lightlysystem-us.backendless.app/api/data/Users"

    this.http.post(url, {email, password})
    
  }
}
