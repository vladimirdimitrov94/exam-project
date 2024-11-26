import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Cocktail } from './types/cokctail';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}

  getAll() {
    const {apiUrl} = environment;
    return this.http.get<Cocktail[]>(`${apiUrl}`)
  }
  
}
