import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';
import { SingleResponseModel } from '../models/singleResponseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url = "https://localhost:44388/api/Rentals/";
  constructor(private http:HttpClient) { }

  getAll():Observable<ListResponseModel<Rental>>{
    return this.http.get<ListResponseModel<Rental>>(this.url+"getall");
  }

  getById(rentalId:number):Observable<SingleResponseModel<Rental>>{
    return this.http.get<SingleResponseModel<Rental>>(this.url+"getbyid?id="+rentalId);
  }

  getRentalDetail():Observable<ListResponseModel<RentalDetail>>{
    return this.http.get<ListResponseModel<RentalDetail>>(this.url+"getrentaldetail");
  }

  rentCar(carId:number,startDate:Date,endDate:Date):Observable<SingleResponseModel<Rental>>{
    let newRental:Rental={id:0,carId:carId,customerId:1,rentDate:startDate,returnDate:endDate}
    return this.http.post<SingleResponseModel<Rental>>(this.url+"rentcar",newRental);
  }
}
