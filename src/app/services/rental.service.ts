import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalDetailResponseModel } from '../models/rentalDetailResponseModel';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url = "https://localhost:44388/api/Rentals/";
  constructor(private http:HttpClient) { }

  getAll():Observable<RentalResponseModel>{
    return this.http.get<RentalResponseModel>(this.url+"getall");
  }

  getRentalDetail():Observable<RentalDetailResponseModel>{
    return this.http.get<RentalDetailResponseModel>(this.url+"getrentaldetail");
  }
}
