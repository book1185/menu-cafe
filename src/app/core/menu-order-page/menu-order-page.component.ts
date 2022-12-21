import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-order-page',
  templateUrl: './menu-order-page.component.html',
  styleUrls: ['./menu-order-page.component.scss']
})
export class MenuOrderPageComponent implements OnInit {
  @Input() itemList =[{
    menu:'Menu1',
    query: 'a',
    menuSub:'',
    description:'',
    price:''
  },{
    menu:'Menu2',
    query: 'b',
    menuSub:'',
    description:'',
    price:''
  },
  {
    menu:'Menu3',
    query: 'c',
    menuSub:'',
    description:'',
    price:''
  }]
;
foods = [
  {value: 1, viewValue: '1'},
  {value: 2, viewValue: '2'},
  {value: 3, viewValue: '3'},
];


  constructor() { }

  ngOnInit(): void {
  }

}
