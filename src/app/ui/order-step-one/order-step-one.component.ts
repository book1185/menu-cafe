import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-order-step-one',
  templateUrl: './order-step-one.component.html',
  styleUrls: ['./order-step-one.component.scss'],
})
export class OrderStepOneComponent implements OnInit {
  private dbPath = '/food-desert-menu';
  tutorials:any
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
  constructor(private db: AngularFirestore) {
    this.getAll().snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.tutorials = data;
      console.log( this.tutorials )
    });
  }

  getAll(): AngularFirestoreCollection{
    console.log(this.db.collection(this.dbPath))
    return  this.db.collection(this.dbPath);
  }


  ngOnInit(): void {}
}
