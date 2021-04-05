import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { Photo } from 'src/app/models/photo';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { PhotoService } from 'src/app/services/photo.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  car:CarDetail;
  photos:Photo[];
  startDate:Date;
  endDate:Date;
  rental:Rental;
  constructor(private carService:CarService, 
    private activetedRoute:ActivatedRoute,
    private photoService:PhotoService,
    private toastr:ToastrService,
    private rentalService:RentalService,
    private router:Router) { }

  ngOnInit(): void {
    this.activetedRoute.params.subscribe(params => {
      this.getCar(params["carId"]);
      this.getPhotosByCarId(params["carId"]);
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

  rentCar(car:CarDetail){
    this.rentalService.rentCar(car.carId,this.startDate,this.endDate).subscribe(response => {
      console.log(response)
       if(response.success){
         this.toastr.info('You are being redirected to payment','', {timeOut: 1000})
         .onHidden
         .subscribe(() => this.directToPayment(response.data.id));
       }
       else{
         this.toastr.error("hata");
         console.log(response);
       }
    });
  }
  directToPayment(rentalId:number){
    this.router.navigate(["/car/rent/payment",rentalId]);
  }
}
