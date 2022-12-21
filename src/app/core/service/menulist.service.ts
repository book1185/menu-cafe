import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenulistService {

  constructor() { }

  foodDesert=[{
    menu: '自家製アイスクリーム',
    menuSub:'(ローティー添え)',
    price: 600,
    description:'さっぱりとした優しい甘い口どけの自家製アイスです ローティー（タイのパンケーキ）とご一緒に'
  },
  {
    menu: 'アイスクリームサンド',
    menuSub:'(カオニャオ入り)',
    price: 600,
    description:'さっぱりとした優しい甘い口どけの自家製アイスです ローティー（タイのパンケーキ）とご一緒に'
  },
  {
    menu: '自家製アイスクリーム',
    menuSub:'(ローティー添え)',
    price: 600,
    description:'当店自慢の自家製アイスとカオニャオ（タイのもち米を炊いたもの）をふわふわのパンに挟んだ、食感の楽しいアイスクリームサンドです'
  }]
  drink=[{
    menu: 'タイミルクティー',
    price: 600,
    hot: 600,
    cold: 600,
  },
  {
    menu: 'タイ紅茶',
    price: 600,
    hot: 600,
    cold: 600,
  },
  {
    menu: 'タイコーヒー',
    price: 600,
    hot: 600,
    cold: 600,
    description:'タイ産コーヒー豆使用'
  },
  {
    menu: 'コーヒー',
    price: 600,
    hot: 600,
    cold: 600,
  },
  {
    menu: 'バナナミルク',
    price: 600,
    hot: 600,
    cold: 600,
  },
  {
    menu: 'バナナビール',
    price: 600,
    hot: 600,
    cold: 600,
    description:'【アルコール飲料】'
  }]
}
