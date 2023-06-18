import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment.prod';
import { ApiResponse } from '@data/interfaces/api/response.interface';
import { LoginRequest, LoginResponse } from '@data/interfaces/api/login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url : string = environment.API_URL
  private auth : LoginResponse = {} as LoginResponse

  constructor(private http : HttpClient) {}

  public get user() : LoginResponse {
    return this.auth
  }

  public set user(user : LoginResponse) {
    this.auth = user
  }

  public login(metadata : LoginRequest) : Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(`${this.url}/auth/login`, metadata)
  }
}
