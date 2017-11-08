import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

interface BuyItem {
  id: String;
  name: String;
}

@Injectable()
export class BuyItemsService {

  firebaseDBRef: firebase.database.Reference

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyDiNYhb5KjHzGFXoEjKC3kNrmgzoPbhE6Q",
      authDomain: "princess-jewellery-box.firebaseapp.com",
      databaseURL: "https://princess-jewellery-box.firebaseio.com",
      projectId: "princess-jewellery-box",
      storageBucket: "",
      messagingSenderId: "35640597958"
    });
    this.firebaseDBRef = firebase.database().ref('buyItems');
  }

  fetchItems(): Observable<BuyItem[]> {
    return Observable.fromEvent(this.firebaseDBRef, 'value')
      .map((data: firebase.database.DataSnapshot) => {
        const rawData: Object = data.toJSON()
        const buyItems: BuyItem[] = []
        for (let id in rawData) {
          buyItems.push({ id, ...rawData[id] })
        }
        return buyItems
      })
  }
}
