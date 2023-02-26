import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

interface ICompareObject {
  name: string;
  age?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sumNum = {
    addTen: function (num: number) {
      return num + 10;
    },
    addTwenty: function (num: number) {
      return num + 20;
    },
    notNum: 'not nummm'
  }

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
    this.newAync().then(res => {
      console.log(res);})
    // this.newAync().then(data => {console.log('async data', data)});
    // this.promiseChaining().then((data: any) => console.log(data));
    // this.promiseChaining().then(
    //   (data) => {
    //     console.log(data);
    //   return "good morning" // implicit promise
    //   }
    // ).then(
    //   data => {
    //     console.log(data);
    //     return "good after noon"
    //   }
    // ).then( data => {
    //   console.log(data);
    //   return "good bye"
    // });
    // this.promiseFun().then(
    //   (data)=>{console.log('then', data);}
    // ,(err)=> {console.log('error', err);}
    // )
    // let x = this.countStr('hello');
    // console.log('Count', x);
    // this.compareObj({name: "hello"}, {name: "hello"});
    // // console.log( this.newAttend('saturday'));
    // console.log('check all', this.checkALL(this.sumNum, 100));
  }

  logout() {
    this.authService.logout();
  }

  // @ts-ignore
  compareObj(obj1: ICompareObject, obj2: ICompareObject) {
    let obj1Length = Object.keys(obj1).length;
    let obj2Length = Object.keys(obj2).length;

    if (obj1Length != obj2Length) {
      return false;
    }
    for (let key in obj1) {
      // @ts-ignore
      let v1 = obj1[key];
      // @ts-ignore
      let v2 = obj2[key];
      if (v1 != v2) {
        return false;
      }

    }
    return true;
  }

  // @ts-ignore
  newAttend(day: string) {
    let out = [];
    let classRoom = [
      {rania: [{saturday: true}, {sunday: true}]},
      {suzy: [{saturday: true}, {sunday: false}]},
      {monica: [{saturday: false}, {sunday: true}]},
    ];
    for (let i = 0; i < classRoom.length; i++) {
      let arrayElment = classRoom[i];
      let name = Object.keys(arrayElment)[0];
      // console.log('name',name);
      // console.log('arr element',arrayElment);
      // @ts-ignore
      let days = arrayElment[name];
      // console.log('days', days);
      for (let j = 0; j < days.length; j++) {
        let newarr = days[j];
        // console.log('new arr',newarr)
        if (newarr[day]) {
          out.push(name);
          // console.log('output' ,out)
        }
      }
    }
    return out;
  }

  checkALL(obj: object, value: number) {
    let out = [];
    for (let key in obj) {
      // @ts-ignore
      let v = obj[key];
      if (typeof v == "function") {
        // @ts-ignore
        let res = v(value);
        out.push(res);
        // console.log(out)
      }
    }
    return out;
  }

  sum(n: any) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
      res = res + i;
    }
    return res;
  }

  charCount(str: string, char: string) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (char == str[i]) {
        count = count + 1;
      }
    }
    return count;
  }

  fact(n: number) {
    let count = 1;
    for (let i = 1; i <= n; i++) {
      count = count * i;
    }
    return count;
  }

  swap(x: number, y: number) {
    let x1 = x;
    let y1 = y;
    let empty = x1;
    x1 = y1;
    y1 = empty;
    // @ts-ignore
    console.log(x1, y1);
  }

  makeArr(start: number, end: number, step: number) {
    let arr = [];
    if (step < 0) {
      [start, end] = [end, start]
    }
    if (start > end && step < 0) {
      for (let i = start; i >= end; i = step + i) {
        arr.push(i)
      }
    } else {
      for (let i = start; i <= end; i = step + i) {
        arr.push(i)
      }
    }
    return arr;
  }

  sumArr(arr: number[]) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      // console.log(sum)
    }
    return sum;
  }

  countStr(str: string) {
    let obj = {};
   str.split("").forEach(x => {
     console.log('x', x);
     // @ts-ignore

     // @ts-ignore
     obj[x] = obj[x] ? (obj[x] + 1) : 1;
     // @ts-ignore
     console.log('obj[x]', obj[x]);
   })
    return obj
  }
    promiseFun () {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
          let userName = prompt("d5l ur name ");
          if (userName == null) {
            return;
          } else if (userName.length > 3) {
            resolve(userName)
          } else {
            reject('fail')
          }
        }, 2000)
      })
    }

    promiseChaining(){
    // @ts-ignore
      return new Promise.all([
     new Promise((resolve, reject)=> {setTimeout(() => {resolve(1)},1000)}),
     new Promise((resolve, reject)=> {setTimeout(() => {resolve(2)},2000)}),
     new Promise((resolve, reject)=> {setTimeout(() => {resolve(3)},3000)}),

    ]).then( (res: any) => {console.log(res)}
      )
    // return new Promise((resolve , reject)=>{
    //   setTimeout(()=>{
    //     resolve('start chaining');
    //   },1000)
    // })
    }

   async newAync() {
     let pro = new Promise((resolve, reject) => {
       setTimeout(()=> {console.log('done ');},2000)
     })
     let x = await pro;
     return x;
     // pro.then(data => {
     //   return data
     // })
    }

}
