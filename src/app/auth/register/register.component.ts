import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup ;


  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    // this.registerForm = this.fb.group(
    //   {
    //     userName: ['', Validators.required],
    //     password: ['', Validators.required],
    //     confirmPassword: ['', Validators.required],}
    //   // }, {validator: this.MatchPassword}
    // )
  }

  submit() {
    console.log(this.registerForm.value)
  }

  // private MatchPassword(AC: AbstractControl) {
  //   let password = AC.get('password')?.value; // to get value in input tag
  //   let confirmNewPassword = AC.get('confirmPassword')?.value; // to get value in input tag
  //   if (password != confirmNewPassword) {
  //     AC.get('confirmPassword')?.setErrors({MatchPassword: true})
  //   } else {
  //     return null
  //   }
  // }

}
