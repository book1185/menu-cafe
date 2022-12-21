import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit {
  @Input() itemList =[{
    menu:'Menu1',
    query: 'a'
  },{
    menu:'Menu2',
    query: 'b'
  },
  {
    menu:'Menu3',
    query: 'c'
  }]
;
urlcheck: any;

  
  constructor(private router: Router, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.urlcheck=this.route.snapshot.routeConfig?.path
  }

  goProducts(query:any) {
    if(this.urlcheck=='crud-menu'){
      this.router.navigate(
        ['/crud-category'],
        { queryParams: { order: query } }
      );

    }
    if(this.urlcheck==''){
      this.router.navigate(
        ['/category'],
        { queryParams: { order: query } }
      );

    }

  }

}
