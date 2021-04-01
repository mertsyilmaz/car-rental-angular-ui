import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[]=[];
  rentalsDetail:RentalDetail[]=[];
  constructor(private rentalService:RentalService) { }

  ngOnInit(): void {
    this.getRentalsDetail();
  }

  getRentals(){
    this.rentalService.getAll().subscribe(response => {
      this.rentals = response.data;
    });
  }

  getRentalsDetail(){
    this.rentalService.getRentalDetail().subscribe(response => {
      this.rentalsDetail = response.data;
    });
  }

}
