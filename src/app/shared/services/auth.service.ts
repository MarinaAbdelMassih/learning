import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {IToken, IUserInfo} from '../interfaces/user-info.interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  register(userData: IUserInfo):Observable<any>{
    return this.httpClient.post(environment.baseUrl +'auth/register',userData);
  }
}
