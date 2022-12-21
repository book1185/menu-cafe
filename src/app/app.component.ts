import { Component } from '@angular/core';
import { IndexService } from './core/service/index.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private indexService: IndexService){
    console.log(indexService)

  }
  title = 'cafe-menu-viewers-ver12';
}
