import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Photo } from 'src/app/models/photo';
import { CarService } from 'src/app/services/car.service';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car:CarDetail;
  photos:Photo[];
  firstPhoto:string;
  constructor(private carService:CarService, 
    private activetedRoute:ActivatedRoute,
    private photoService:PhotoService) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      this.getCar(params["id"]);
      this.getPhotosByCarId(params["id"]);
    });
  }

  getCar(carId:number){
    this.carService.getCarDetailById(carId).subscribe(response => {
      this.car = response.data;
    });
  }

  getPhotosByCarId(carId:number){
    this.photoService.getPhotoByCarId(carId).subscribe(response => {
      this.photos = response.data;
    })
  }

}
