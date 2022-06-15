import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from '../../../environments/environment';
import {  Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  register(username: string, password: string):Observable<any>{
    return this.httpClient.post(environment.baseUrl +"auth/register",{username,password});
  }
}
