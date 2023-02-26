import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLightbox]'
})
export class LightboxDirective {

  constructor(private elmRef:ElementRef) { }
@HostListener('mouseover') onMouseEnter() {
    this.elmRef.nativeElement.style.color = "red";
  }

  @HostListener('mouseout') onMouseOut() {
    this.elmRef.nativeElement.style.color = "green";
  }


}
// class employee {
//  #id:number;
//  name = '';
//  age?:number;
//
//  showData() {
//    console.log('employee name is : ' + this.name + ', and age is ' + this.age);
//  }
//  save() {
//    console.log('save employee data');
//  }
// }
//
// let x = new employee();
// x.name = 'marina';
// x.age = 22;
//
// let y = new employee();
// y.name = 'mary';
// y.age = 30;
//
// x.showData();
// y.showData();
//
//
