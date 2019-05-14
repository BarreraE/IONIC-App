import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  elements: Elements[] = [
    {
      icon:'american-football',
      name:'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon:'appstore',
      name:'Alert',
      redirecTo: '/alert'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Elements {
  icon: String;
  name: String;
  redirecTo: String;
}