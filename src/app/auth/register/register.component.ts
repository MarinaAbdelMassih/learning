import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {CustomValidators} from "../custom-validators";

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
    this.authService.register(this.registerForm.value.username , this.registerForm.value.password).then(
      data => {
        console.log(data);
      }
    )
  }

  
  public MatchPassword(AC: AbstractControl): any {
    let password = AC.get('password')?.value; // to get value in input tag
    let confirmNewPassword = AC.get('confirmPassword')?.value; // to get value in input tag
    if (password != confirmNewPassword) {
      AC.get('confirmPassword')?.setErrors({MatchPassword: true})
    } else {
      return null
    }
  }
}