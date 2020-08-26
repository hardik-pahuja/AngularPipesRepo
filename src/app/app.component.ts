import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Pipes Demo';
  today = new Date();
  student = {name:'hardik', age:22, course:'PGP', address:{city:'New Delhi', country:'India', pin:110024}}
  money;
  marks;
  age;
  weekDays = ['Mon', 'Tues','Wed', 'Thur','Fri', 'Sat','Sun'];
  name = 'hardik pahuja';
  num;
  // this.currency = 456;
  // day;
  // month;
  // year;
  constructor(){
  //   this.day = this.today.getDate;
  //   this.month = this.today.getMonth;
  //   this.year = this.today.getFullYear;
  this.money = 456;
  this.marks = 0.53;
  this.age = 22.6;
  this.num = 729;
  }



}
