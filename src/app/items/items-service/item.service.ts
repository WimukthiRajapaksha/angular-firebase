import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { ItemPurchase } from '../itemPurchase.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection('fyp-mora-1547533508043');
   }

  // addNewPurchase(item: ItemPurchase) {
  //   this.itemsCollection.get().forEach((itemm) => {
  //   });
  // }

  // getAllPurchases() {
  //   return this.itemsCollection.valueChanges();
  // }
}
