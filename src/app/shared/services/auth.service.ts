import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {IUserInfo, IToken} from '../interfaces/user-info.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  register(userData: IUserInfo):Observable<IToken>{
    return this.httpClient.post<IToken>(environment.baseUrl +'auth/register',userData);
  }
}
