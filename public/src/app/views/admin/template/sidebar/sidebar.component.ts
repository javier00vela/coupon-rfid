import { Component, OnInit } from '@angular/core';
import { Routes } from 'src/app/interfaces/admin/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public routes : Routes[] = [
    {name : "main" , icon :  "home" , route : "/admin/main"},
    {name : "person" , icon :  "user" , route : "/admin/person"},
    {name : "plan" , icon :  "cubes" , route : "/admin/plan"},
    {name : "store" , icon :  "apple", route : "/admin/store"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
