import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../services/hotels.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Topsites} from '../../models/topsites';
import {TopsitesService} from '../../services/topsites.service';

@Component({
  selector: 'app-add-topsites',
  templateUrl: './add-topsites.component.html',
  styleUrls: ['./add-topsites.component.css']
})
export class AddTopsitesComponent implements OnInit {

  topsite: any = {
    hotel_name: '',
    description: '',
    image: ['']
  };

  constructor(private topsitesService: TopsitesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
  }

  onSubmit() {
    this.topsitesService.addTopsite(this.topsite);
    this.topsite.hotel_name = '';
    this.topsite.description = '';
    this.topsite.image = '';
    this.router.navigate(['/topsites']);
  }

}
