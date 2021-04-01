import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "https://localhost:44388/api/Customers/getall";
  constructor(private http:HttpClient) { }

  getAll():Observable<CustomerResponseModel>{
    return this.http.get<CustomerResponseModel>(this.url);
  }
}
