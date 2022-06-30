import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {IUserInfo} from "../../shared/interfaces/user-info.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg?: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  login() {
    let loginData: IUserInfo = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.authService.login(loginData).subscribe({
      next: data => {
        localStorage.setItem('user token', data.access_token);
        this.router.navigate(['/']);
      }, error: err => {
        this.errorMsg = err.error.message;
      },
  }  )
  }
}
