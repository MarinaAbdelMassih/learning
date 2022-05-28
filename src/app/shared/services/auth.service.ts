import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  register(username: string, password: string):Promise<any> {
    return this.httpClient.post("https://todo-api-nestjs.herokuapp.com/auth/register",{username,password}).toPromise();
  }
}
