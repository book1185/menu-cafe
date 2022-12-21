import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenulistService } from 'src/app/core/service/menulist.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private MenuService:MenulistService) { }
  menuList:any

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      if(params.order=='food&desert'){
        this.menuList=this.MenuService.foodDesert
      }
      if(params.order=='drink'){
        this.menuList=this.MenuService.drink
      }
    }
  );
  }

}
