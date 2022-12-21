import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input() stepIndex!:number;
  @Input() keyWord!:string;

  constructor() { }

  ngOnInit(): void {
  }

  navigateNext(){
    
  }

}
