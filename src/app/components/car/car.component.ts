import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
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
  constructor(private carService:CarService,private activetedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      if(params["brandId"]){
        this.getCarsDetailByBrandId(params["brandId"]);
      }
      else if(params["colorId"])
      {
        this.getCarsDetailByColorId(params["colorId"]);
      }
      else{
        this.getCarsDetail();
      }
    })   
  }

  getCars(){
    this.carService.getAll().subscribe(response => {
      this.cars = response.data;
    });
  }

  getCarsDetailByBrandId(brandId:number){
    this.carService.getCarDetailByColorId(brandId).subscribe(response => {
      this.carsDetail = response.data;
    });
  }

  getCarsDetailByColorId(colorId:number){
    this.carService.getCarDetailByColorId(colorId).subscribe(response => {
      this.carsDetail = response.data;
    });
  }

  getCarsDetail(){
    this.carService.getCarDetail().subscribe(response => {
      this.carsDetail = response.data;
    });
  }
}
