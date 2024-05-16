import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private baseUrl = 'http://localhost:8087/api/v1/auth';

  constructor(private http: HttpClient) {}

  signup(signUpRequest: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/signup`, signUpRequest);
  }

  signin(signinRequest: any): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/signin`, signinRequest);
  }

  refresh(refreshTokenRequest: any): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/refresh`, refreshTokenRequest);
  }
}
