import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Photo } from '../models/photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  url = "https://localhost:44388/api/Photos/";
  constructor(private http:HttpClient) { }

  getPhotoByCarId(carId:number):Observable<ListResponseModel<Photo>>{
    return this.http.get<ListResponseModel<Photo>>(this.url + "getphotosbycarid?carId="+carId); 
  }
}
