import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudMenuService } from 'src/app/core/service/crud-menu.service';
import { FoodDesert } from 'src/app/model/food-desert.model';

@Component({
  selector: 'app-crud-menu-page',
  templateUrl: './crud-menu-page.component.html',
  styleUrls: ['./crud-menu-page.component.scss']
})
export class CrudMenuPageComponent implements OnInit {
  foodDesertMode=false;
  drinkMode=false;
  foodDesert: FoodDesert = new FoodDesert();


  constructor(private route: ActivatedRoute, private crudMenuService:CrudMenuService) {

   }


  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      if(params.order=='food&desert'){
        this.foodDesertMode=true;
     
      }
      if(params.order=='drink'){
        this.drinkMode=true;
      
      }
    }
  );
  }
  saveFoodDesert(){
    this.crudMenuService.createFoodDesert(this.foodDesert).then(() => {
      console.log('Created new item successfully!');
    });
  }

}
