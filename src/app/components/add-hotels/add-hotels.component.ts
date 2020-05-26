import { Component, OnInit } from '@angular/core';
import {Hotel} from '../../models/hotel';
import {HotelsService} from '../../services/hotels.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-hotels',
  templateUrl: './add-hotels.component.html',
  styleUrls: ['./add-hotels.component.css']
})
export class AddHotelsComponent implements OnInit {

  hotel: any = {
    hotel_name: '',
    description: '',
    image: ['']
  };
  constructor(private hotelService: HotelsService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
  }

  onSubmit() {
    this.hotelService.addHotel(this.hotel);
    this.hotel.hotel_name = '';
    this.hotel.description = '';
    this.hotel.image = '';
    this.router.navigate(['/hotels']);
  }
}
