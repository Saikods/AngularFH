import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { AddHotelsComponent } from './components/add-hotels/add-hotels.component';

import { environment } from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {HotelsService} from './services/hotels.service';

import {FormsModule} from '@angular/forms';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopsitesComponent } from './components/topsites/topsites.component';
import { AddTopsitesComponent } from './components/add-topsites/add-topsites.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    AddHotelsComponent,
    NavigationComponent,
    TopsitesComponent,
    AddTopsitesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFirestoreModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'FindHome')
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
