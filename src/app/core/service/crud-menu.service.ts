import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FoodDesert } from 'src/app/model/food-desert.model';

@Injectable({
  providedIn: 'root'
})
export class CrudMenuService {

  private foodDesertdbPath = '/food-desert-menu';

  foodDesertRef: AngularFirestoreCollection;

  constructor(private db: AngularFirestore) {
    this.foodDesertRef = db.collection(this.foodDesertdbPath);
  }

  getAllFoodDesert(): AngularFirestoreCollection {
    return this.foodDesertRef;
  }

  createFoodDesert(data:FoodDesert): any {
    return this.foodDesertRef.add({ ...data });
  }

  updateFoodDesert(id: string, data: any): Promise<void> {
    return this.foodDesertRef.doc(id).update(data);
  }

  deleteFoodDesert(id: string): Promise<void> {
    return this.foodDesertRef.doc(id).delete();
  }
  
}
