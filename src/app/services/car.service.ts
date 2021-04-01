import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResponseModel';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = "https://localhost:44388/api/Cars/";
  constructor(private http:HttpClient) { }

  getAll():Observable<CarResponseModel>{
    return this.http.get<CarResponseModel>(this.url + "getall");
  }

  getCarDetail(){
    return this.http.get<CarDetailResponseModel>(this.url + "getcardetails"); 
  }
}
