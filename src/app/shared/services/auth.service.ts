import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {IUserInfo, IToken} from '../interfaces/user-info.interface';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  register(userData: IUserInfo): Observable<IToken> {
    return this.httpClient.post<IToken>(environment.baseUrl + 'auth/register', userData);
  }

  login(userData: IUserInfo): Observable<IToken> {
    return this.httpClient.post<IToken>(environment.baseUrl + 'auth/login', userData)
  }

  logout() {
    localStorage.removeItem('user token');
  }

  isLoggedIn() {
    let jwt = new JwtHelperService();
    let token = localStorage.getItem('user token');
    if(!token) {
      return false
    }
    let expireDate = jwt.getTokenExpirationDate(token);
    let expired = jwt.isTokenExpired(token);
    // console.log('date Expired',expireDate);
    // console.log('is Expired',expired);
  return !expired;
  }

  getCurrentUser() {
    let token = localStorage.getItem('user token');
    if(!token) {
      return null
    }
    return new JwtHelperService().decodeToken(token);
  }
}
