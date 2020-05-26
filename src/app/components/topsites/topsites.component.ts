import { Component, OnInit } from '@angular/core';
import {TopsitesService} from '../../services/topsites.service';
import {Router} from '@angular/router';
import {Topsites} from '../../models/topsites';

@Component({
  selector: 'app-topsites',
  templateUrl: './topsites.component.html',
  styleUrls: ['./topsites.component.css']
})
export class TopsitesComponent implements OnInit {

  constructor(public topsitesService: TopsitesService, private router: Router) { }
  topsites: Topsites[];

  ngOnInit(): void {
    this.topsitesService.getTopsites().subscribe( topsites => {
      console.log(topsites);
      this.topsites = topsites;
    });
  }
}
