import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HotelsComponent} from './components/hotels/hotels.component';
import {AddHotelsComponent} from './components/add-hotels/add-hotels.component';
import {TopsitesComponent} from './components/topsites/topsites.component';
import {AddTopsitesComponent} from './components/add-topsites/add-topsites.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/hotels',
    pathMatch: 'full'
  },
  {
    path: 'hotels',
    component: HotelsComponent
  },
  {
    path: 'hotels/add',
    component: AddHotelsComponent
  },
  {
    path: 'topsites',
    component: TopsitesComponent
  },
  {
    path: 'topsites/add',
    component: AddTopsitesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
