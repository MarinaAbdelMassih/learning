import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  register(userName: string, password: string):Promise<any> {
    return this.httpClient.post("http://localhost:3000/auth/register",{userName,password}).toPromise();
  }
}
