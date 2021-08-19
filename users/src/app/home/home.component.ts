import { Component, OnInit } from '@angular/core';
import { user } from '../model/user'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public dataSource : user [] = [
    { 
      name: 'Username A',
      email1: 'user1@domain',
      email2:'user1@domain',
      role: 'Manager',
      departament: 'IT' ,
      creation: '18-08-2021'
    },
    { 
      name: 'Username B',
      email1: 'user1@domain',
      email2:'user1@domain',
      role: 'Developer',
      departament: 'Customer Relation' ,
      creation: '18-08-2021'
    },
  ];

  columnsToDisplay = ['userDetails','userRole','userDepartament'];
}
