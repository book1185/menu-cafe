import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {
  categoryList = [
    {
      menu: '料理＆デサート',
      query: 'food&desert'
    },
    {
      menu: 'ドリンク',
      query: 'drink'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
