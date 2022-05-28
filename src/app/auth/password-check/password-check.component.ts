import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-password-check',
  templateUrl: './password-check.component.html',
  styleUrls: ['./password-check.component.scss']
})
export class PasswordCheckComponent implements OnInit, OnChanges {
  @Input() password: string = '';
  passwordStrength = {
    checkCapitalLetter: {
      id: 1,
      pattern: /[A-Z]/,
      checked: false
    },
    checkSmallLetter: {
      id: 2,
      pattern: /[a-z]/,
      checked: false
    },
    checkSpecialChar: {
      id: 3,
      pattern: /[-!@#$%^&*_~+/.]/,
      checked: false
    },
    checkNumber: {
      id: 4,
      pattern: /[0-9]/,
      checked: false
    },
    checkCount: {
      id: 5,
      min: 8,
      max: 20,
      checked: false
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  checkedPasswordStrength(): void {
    this.passwordStrength.checkCapitalLetter.checked = this.passwordStrength.checkCapitalLetter.pattern.test(this.password);
    this.passwordStrength.checkSmallLetter.checked = this.passwordStrength.checkSmallLetter.pattern.test(this.password);
    this.passwordStrength.checkSpecialChar.checked = this.passwordStrength.checkSpecialChar.pattern.test(this.password);
    this.passwordStrength.checkNumber.checked = this.passwordStrength.checkNumber.pattern.test(this.password);
    this.passwordStrength.checkCount.checked = this.password.length >= this.passwordStrength.checkCount.min && this.password.length <= this.passwordStrength.checkCount.max;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkedPasswordStrength();
  }

}
