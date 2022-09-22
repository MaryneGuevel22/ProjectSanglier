import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-authentification',
  templateUrl: './component-authentification.component.html',
  styleUrls: ['./component-authentification.component.css']
})
export class ComponentAuthentificationComponent implements OnInit {

  constructor() { }

  isClick : boolean = false

  ngOnInit(): void {
  }

  changeComponent(){
    this.isClick = true;
  }

}
