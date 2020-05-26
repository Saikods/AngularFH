import { Injectable } from '@angular/core';

import {AngularFirestore} from 'angularfire2/firestore';
import {AngularFirestoreCollection} from 'angularfire2/firestore';
import {AngularFirestoreDocument } from 'angularfire2/firestore';

import {Hotel} from '../models/hotel';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  hotelsCollection: AngularFirestoreCollection<Hotel>;
  hotels: Observable<Hotel[]>;
  hotelDoc: AngularFirestoreDocument<Hotel>;
  fileId = this.afs.collection('hotels').ref.doc().id;

  constructor(public afs: AngularFirestore) {
    this.hotelsCollection = this.afs.collection('hotels', x => x.orderBy('hotel_name'));
    this.hotels = this.afs.collection('hotels').valueChanges();
    this.hotels = this.hotelsCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Hotel;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getHotels() {
    return this.hotels;
  }

  addHotel(hotel: Hotel) {
    return this.hotelsCollection.add(hotel);
  }

  deleteHotel(id: string){
    return this.afs.collection('hotels').doc(id).delete();
  }

}
