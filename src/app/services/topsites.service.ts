import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {Hotel} from '../models/hotel';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Topsites} from '../models/topsites';

@Injectable({
  providedIn: 'root'
})
export class TopsitesService {
  topsitesCollection: AngularFirestoreCollection<Topsites>;
  topsites: Observable<Topsites[]>;
  topsitesDoc: AngularFirestoreDocument<Hotel>;
  fileId = this.afs.collection('hotels').ref.doc().id;

  constructor(public afs: AngularFirestore) {
    this.topsitesCollection = this.afs.collection('topsites', x => x.orderBy('site_name'));
    this.topsites = this.afs.collection('hotels').valueChanges();
    this.topsites = this.topsitesCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Topsites;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  getTopsites(){
    return this.topsites;
  }

  addTopsite(topsite: Topsites) {
    return this.topsitesCollection.add(topsite);
  }
}
