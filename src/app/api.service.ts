import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Cocktail } from './types/cokctail';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Cocktail[]>(`/api/cocktails`)
  }

  getSingle(id: string) {
    return this.http.get<Cocktail>(`$/api/cocktails/${id}`)
  }

  addCocktail(data: {}) {
    return this.http.post<Cocktail>(`/api/cocktails`, data)
  }
  
}
