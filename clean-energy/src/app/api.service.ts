// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LoginResponse {
  token: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Login method
  login(username: string, password: string): Observable<LoginResponse> {
    const body = { username, password };
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, body);
  }
}
