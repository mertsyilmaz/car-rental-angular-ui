import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  url = "https://localhost:44388/api/Customers/getall";
  constructor(private http:HttpClient) { }

  getAll():Observable<ListResponseModel<Customer>>{
    return this.http.get<ListResponseModel<Customer>>(this.url);
  }
}
