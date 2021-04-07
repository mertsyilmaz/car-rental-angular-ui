import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = "https://localhost:44388/api/Brands/";
  constructor(private http:HttpClient) { }

  getAll():Observable<ListResponseModel<Brand>>{
    return this.http.get<ListResponseModel<Brand>>(this.url+"getall");
  }

  getById(brandId:number):Observable<SingleResponseModel<Brand>>{
    return this.http.get<SingleResponseModel<Brand>>(this.url+"getbyid?id="+brandId);
  }

  add(brand:Brand):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.url+"add",brand);
  }
  update(brand:Brand):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.url+"update",brand);
  }

  delete(brand:Brand):Observable<ResponseModel>{
    return this.http.post<ResponseModel>(this.url+"delete",brand);
  }
}
