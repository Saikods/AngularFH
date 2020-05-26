import { Component, OnInit } from '@angular/core';

import { Hotel } from '../../models/hotel';
import { HotelsService } from '../../services/hotels.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(public hotelService: HotelsService, private router: Router) { }
  hotels: Hotel[];

  /* primer metodo que se ejecuta */
  ngOnInit(): void {
    this.hotelService.getHotels().subscribe(hotels => {
      console.log(hotels);
      this.hotels = hotels;
    });
  }

  public deleteHotel(id) {
    const response = confirm('¿Estás seguro de querer borrar este hotel?');
    if (response ) {
      this.hotelService.deleteHotel(id).then(() => {
        console.log('Hotel Eliminado!');
        this.router.navigate(['/hotels']);
      }, (error) => {
        console.error(error);
      });
    }
  }

}
