import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandResponseModel } from '../models/brandResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  url = "https://localhost:44388/api/Brands/getall";
  constructor(private http:HttpClient) { }

  getAll():Observable<BrandResponseModel>{
    return this.http.get<BrandResponseModel>(this.url);
  }
}
