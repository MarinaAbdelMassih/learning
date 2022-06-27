import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import {AuthService} from '../../shared/services/auth.service';
import {CustomValidators} from '../custom-validators';
import {IToken, IUserInfo} from '../../shared/interfaces/user-info.interface';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;



  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required , CustomValidators.patternValidator(/[\d]/, {hasNumber: true}),
      CustomValidators.patternValidator(/[A-Z]/,{hasCapitalCase:true}),CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidators.patternValidator(/[$&+,:;=?@#|'<>.^*()%!-]/, { hasSpecialCharacters: true }), Validators.minLength(8)])],
      confirmPassword: ['', Validators.required],
    }, {
      validators : this.MatchPassword
    })
  }

  ngOnInit(): void {
  }

  submit() {
    let userData : IUserInfo = {
      username: this.registerForm.value.username ,
      password: this.registerForm.value.password
    }
    this.authService.register(userData).subscribe(
      data => {
        localStorage.setItem('user token', data.access_token);
      }
    )
  }

  public MatchPassword(AC: AbstractControl) : null {
    let password = AC.get('password')?.value; // to get value in input tag
    let confirmNewPassword = AC.get('confirmPassword')?.value; // to get value in input tag
    if (password != confirmNewPassword) {
      AC.get('confirmPassword')?.setErrors({MatchPassword: true});
    } else {
      AC.get('confirmPassword')?.setErrors(null);
    }
    return null;
  }
}
