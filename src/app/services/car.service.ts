import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  url = "https://localhost:44388/api/Cars/";
  constructor(private http:HttpClient) { }

  getAll():Observable<ListResponseModel<Car>>{
    return this.http.get<ListResponseModel<Car>>(this.url + "getall");
  }

  getCarDetailById(carId:number):Observable<SingleResponseModel<CarDetail>>{
    return this.http.get<SingleResponseModel<CarDetail>>(this.url+"getcardetailbyid?carId="+carId);
  }

  getCarDetail():Observable<ListResponseModel<CarDetail>>{
    return this.http.get<ListResponseModel<CarDetail>>(this.url + "getcardetails"); 
  }

  getCarDetailByBrandId(brandId:number):Observable<ListResponseModel<CarDetail>>{
    return this.http.get<ListResponseModel<CarDetail>>(this.url + "getcardetailsbybrandId?brandId="+brandId);
  }

  getCarDetailByColorId(colorId:number):Observable<ListResponseModel<CarDetail>>{
    return this.http.get<ListResponseModel<CarDetail>>(this.url + "getcardetailsbycolorId?colorId="+colorId);
  }
}
