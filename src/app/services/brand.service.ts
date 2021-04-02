import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = "https://localhost:44388/api/Brands/getall";
  constructor(private http:HttpClient) { }

  getAll():Observable<ListResponseModel<Brand>>{
    return this.http.get<ListResponseModel<Brand>>(this.url);
  }
}
