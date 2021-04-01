import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  carsDetail:CarDetail[] = [];
  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarsDetail();
  }

  getCars(){
    this.carService.getAll().subscribe(response => {
      this.cars = response.data;
    });
  }

  getCarsDetail(){
    this.carService.getCarDetail().subscribe(response => {
      this.carsDetail = response.data;
    });
  }
}
