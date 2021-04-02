import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { RentalDetail } from '../models/rentalDetail';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url = "https://localhost:44388/api/Rentals/";
  constructor(private http:HttpClient) { }

  getAll():Observable<ListResponseModel<Rental>>{
    return this.http.get<ListResponseModel<Rental>>(this.url+"getall");
  }

  getRentalDetail():Observable<ListResponseModel<RentalDetail>>{
    return this.http.get<ListResponseModel<RentalDetail>>(this.url+"getrentaldetail");
  }
}
