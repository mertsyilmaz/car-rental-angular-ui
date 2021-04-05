import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Payment } from 'src/app/models/payment';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  fullName:"";
  cardNumber:"";
  cvv:"";
  expiration:"";
  isSave:false;
  rental:Rental;
  carId:number;
  customerId:number;
  totalAmount:number;
  car:Car;


  constructor(private activetedRout:ActivatedRoute,
    private rentalService:RentalService,
    private carService:CarService,
    private paymentSercive:PaymentService,
    private toastr:ToastrService,
    private router:Router) { }

  ngOnInit(): void {
    
    this.activetedRout.params.subscribe(params => {
      this.rentalService.getById(params["rentalId"]).subscribe(response => {
        this.rental = response.data;
        this.carService.getById(this.rental.carId).subscribe(response =>{
          this.getTotalAmount(response.data.dailyPrice);
        })
      });
      
    });
  }

  Payment(){
    console.log(this.totalAmount)
    let payment:Payment;
    if(this.isSave == false){
      payment = {
        id:0,
        carId:this.rental.carId,
        customerId:this.rental.customerId,
        totalAmount:this.totalAmount,
        isSave:this.isSave
      };
    } 
    else{
      payment = {
        id:0,
        carId:this.rental.carId,
        customerId:this.rental.customerId,
        totalAmount:this.totalAmount,
        fullName:this.fullName,
        cardNumber:this.cardNumber,
        expiration:this.expiration,
        cvv:this.cvv,
        isSave:this.isSave};
    }
    this.paymentSercive.add(payment).subscribe(Response => {
      if(Response.success){
        this.toastr.success('Payment successful','', {timeOut: 2000})
         .onHidden
         .subscribe(() => this.router.navigate(["/cars"]));
        
      }
    })
  }

   getCar(){
     this.carService.getById(this.rental.carId).subscribe(response => {
       this.car = response.data;
     })
   }

  getTotalAmount(dailyPrice:number)
  {
    let dayCount=0;
    let start = new Date(this.rental.rentDate);
    let end = new Date(this.rental.returnDate);
    if(Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) == Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())){
      dayCount = 1;
    }
    else{
      dayCount = Math.floor(
        (
          Date.UTC(end.getFullYear(), end.getMonth(), end.getDate()) - 
          Date.UTC(start.getFullYear(), start.getMonth(), start.getDate()) 
        ) /(1000 * 60 * 60 * 24));
    }
    this.totalAmount = dayCount * dailyPrice;
  }
}
