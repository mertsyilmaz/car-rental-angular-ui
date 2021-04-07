import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  url = "https://localhost:44388/api/Colors/";
  constructor(private http:HttpClient) { }

  getAll():Observable<ListResponseModel<Color>>{
    return this.http.get<ListResponseModel<Color>>(this.url+"getall");
  }

  getById(colorId:number):Observable<SingleResponseModel<Color>>{
    return this.http.get<SingleResponseModel<Color>>(this.url+"getbyid?id="+colorId);
  }

  add(color:Color):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.url+"add",color);
  }

  update(color:Color):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.url+"update",color);
  }

  delete(color:Color):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.url+"delete",color);
  }
}
